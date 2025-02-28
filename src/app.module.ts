import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';
import { KafkaService } from './kafka/kafka.service';
import { KafkaController } from './kafka/kafka.controller';
import { KafkaModule } from './kafka/kafka.module';
import { KafkaConsumerService } from './kafka/kafka.consumer';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'nestjs_kafka',
      entities: [Product],
      synchronize: true, // Auto-create tables (use migrations in production)
    }),
    ProductModule,
    KafkaModule,
  ],
  providers: [KafkaService, KafkaConsumerService],
  controllers: [KafkaController],
  exports: [KafkaService, KafkaConsumerService],
})
export class AppModule {}
