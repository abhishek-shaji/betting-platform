import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Sport } from '../entities/sport.entity';

@Injectable()
export class SportService {
  constructor(
    @InjectRepository(Sport)
    private eventRepository: Repository<Sport>,
  ) {}

  async findAll(): Promise<Sport[]> {
    return this.eventRepository.find({});
  }
}
