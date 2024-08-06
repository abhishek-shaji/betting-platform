import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from '../entities/event.entity';
import { Outcome } from '../entities/outcome.entity';
import { EventService } from '../services/event.service';
import { EventsController } from '../controllers/events.controller';
import { Sport } from '../entities/sport.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Outcome, Sport])],
  exports: [TypeOrmModule],
  controllers: [EventsController],
  providers: [EventService],
})
export class EventsModule {}
