import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('Bootstrap');
  logger.log('Application is starting...');

  await app.listen(3000);
  logger.log('Application is running on http://localhost:3000');
}
bootstrap();
