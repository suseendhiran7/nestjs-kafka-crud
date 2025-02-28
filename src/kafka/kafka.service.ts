import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Kafka, Producer, Consumer } from 'kafkajs';

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
  private readonly kafka = new Kafka({
    clientId: 'nestjs-kafka',
    brokers: ['localhost:9092'],
  });

  private readonly producer: Producer = this.kafka.producer();
  private readonly consumer: Consumer = this.kafka.consumer({ groupId: 'nestjs-group' });

  async onModuleInit() {
    await this.producer.connect();
    await this.consumer.connect();
    console.log('Kafka Connected');
  }

  async produceMessage(topic: string, message: string) {
    console.log(topic, 'topic');
    
    await this.producer.send({
      topic,
      messages: [{ value: message }],
    });
  }

  async consumeMessages(topic: string, handler: (message: string) => void) {
    await this.consumer.subscribe({ topic, fromBeginning: true });

    await this.consumer.run({
      eachMessage: async ({ message }) => {
        if (message.value) {
          handler(message.value.toString());
        }
      },
    });
  }

  async onModuleDestroy() {
    await this.producer.disconnect();
    await this.consumer.disconnect();
  }
}
