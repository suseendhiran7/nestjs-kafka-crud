import { Module } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { KafkaService } from '../kafka/kafka.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Product])], 
  providers: [ProductService, KafkaService],
  controllers: [ProductController]
})
export class ProductModule {}
