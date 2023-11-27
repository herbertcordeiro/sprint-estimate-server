import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());
  app.enableShutdownHooks();
  app.enableCors();
  await app.listen(8080);
}

bootstrap();
