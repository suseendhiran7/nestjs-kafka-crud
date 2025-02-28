import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { KafkaService } from '../kafka/kafka.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) 
    private readonly productRepository: Repository<Product>,
    private readonly kafkaService: KafkaService,
  ) {}

  async create(productData: Partial<Product>) {
    const product = this.productRepository.create(productData);
    const savedProduct = await this.productRepository.save(product);
    await this.kafkaService.produceMessage('product-created', JSON.stringify(product));
    return this.productRepository.save(product);
  }

  async findAll() {
    return this.productRepository.find();
  }

  async findOne(id: number) {
    return this.productRepository.findOne({ where: { id } });
  }

  async update(id: number, productData: Partial<Product>) {
    await this.productRepository.update(id, productData);
    return this.productRepository.findOne({ where: { id } });
  }

  async delete(id: number) {
    return this.productRepository.delete(id);
  }
}
