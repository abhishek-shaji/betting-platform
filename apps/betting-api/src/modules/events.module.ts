import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EventController } from '../controllers/event.controller';
import { Event } from '../entities/event.entity';
import { Outcome } from '../entities/outcome.entity';
import { Sport } from '../entities/sport.entity';
import { EventService } from '../services/event.service';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Outcome, Sport])],
  exports: [TypeOrmModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventsModule {}
