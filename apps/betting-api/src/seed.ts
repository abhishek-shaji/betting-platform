import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { SeedModule } from './modules/seed.module';
import { SeederService } from './services/seeder.service';

async function bootstrap() {
  NestFactory.createApplicationContext(SeedModule)
    .then((appContext) => {
      const seeder = appContext.get(SeederService);

      seeder
        .seed()
        .catch((error) => {
          Logger.error('Seeding failed!');
          throw error;
        })
        .finally(() => appContext.close());
    })
    .catch((error) => {
      throw error;
    });
}

bootstrap();
