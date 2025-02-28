import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka, Consumer } from 'kafkajs';

@Injectable()
export class KafkaConsumerService implements OnModuleInit {
  private readonly kafka = new Kafka({
    clientId: 'nestjs-kafka',
    brokers: ['localhost:9092'], // Change if Kafka is running on a different port
  });

  private readonly consumer: Consumer = this.kafka.consumer({ groupId: 'product-group' });

  async onModuleInit() {
    await this.consumer.connect();
    console.log('Kafka Consumer connected');

    await this.consumer.subscribe({ topic: 'product-created', fromBeginning: true });

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log('New message received');
        console.log('Topic: '+topic);
        console.log(`Message: ${message.value.toString()}`);
      },
    });

    console.log('Kafka Consumer has started.');
  }
  
}
