// src/data-source.ts
import { DataSource } from 'typeorm';
import { Product } from './product/product.entity'; // Import your entity here
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'root', 
  password: process.env.DB_PASSWORD || 'root', 
  database: process.env.DB_NAME || 'nestcrud', 
  entities: [Product], 
  migrations: [__dirname + '/migration/*.ts'], // Path to migration files
  synchronize: false, // Set to false to avoid auto-sync in production
  namingStrategy: new SnakeNamingStrategy(),
});
