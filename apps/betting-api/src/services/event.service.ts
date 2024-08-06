import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Outcome } from '../entities/outcome.entity';
import { Event } from '../entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    @InjectRepository(Outcome)
    private outcomeRepository: Repository<Outcome>,
  ) {}

  async findEvents(sportId?: number): Promise<Event[]> {
    return this.eventRepository.find({
      where: sportId ? { sportId } : {},
    });
  }
}
