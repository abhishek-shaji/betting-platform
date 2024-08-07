import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;

  /**
   * Swagger setup
   */
  const config = new DocumentBuilder()
    .setTitle('Betting API')
    .setDescription(
      'API for managing sports events and placing bets in an online betting system.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document, {
    jsonDocumentUrl: '/swagger.json',
  });

  /*
   * Validation pipe
   */
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
  Logger.log(`🚀 Swagger is running on: http://localhost:${port}/swagger`);
}

bootstrap();
