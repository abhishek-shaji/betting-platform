import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Bet } from '../entities/bet.entity';
import { Event } from '../entities/event.entity';
import { Outcome } from '../entities/outcome.entity';
import { Sport } from '../entities/sport.entity';
import { User } from '../entities/user.entity';
import { events } from '../seeds/events';
import { outcomes } from '../seeds/outcomes';
import { sports } from '../seeds/sports';
import { users } from '../seeds/users';

@Injectable()
class SeederService {
  constructor(
    @InjectRepository(Bet) private betRepository: Repository<Bet>,
    @InjectRepository(Event) private eventRepository: Repository<Event>,
    @InjectRepository(Outcome) private outcomeRepository: Repository<Outcome>,
    @InjectRepository(Sport) private sportRepository: Repository<Sport>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async deleteExistingData() {
    Logger.log('Deleting existing data...');
    await this.betRepository.delete({});
    await this.userRepository.delete({});
    await this.outcomeRepository.delete({});
    await this.eventRepository.delete({});
    await this.sportRepository.delete({});
    Logger.log('Existing data deleted');
  }

  async resetSequences() {
    Logger.log('Resetting sequences...');
    await this.userRepository.query(
      'ALTER SEQUENCE user_id_seq RESTART WITH 1',
    );
    await this.betRepository.query('ALTER SEQUENCE bet_id_seq RESTART WITH 1');
    await this.outcomeRepository.query(
      'ALTER SEQUENCE outcome_id_seq RESTART WITH 1',
    );
    await this.eventRepository.query(
      'ALTER SEQUENCE event_id_seq RESTART WITH 1',
    );
    await this.sportRepository.query(
      'ALTER SEQUENCE sport_id_seq RESTART WITH 1',
    );
    Logger.log('Sequences reset');
  }

  async seed() {
    try {
      await this.deleteExistingData();
      await this.resetSequences();
      Logger.log('Seeding database...');

      Logger.log('Inserting sports...');
      for (const sportData of sports) {
        const event = this.sportRepository.create(sportData);

        await this.sportRepository.save(event);
      }

      Logger.log('Inserting events...');
      for (const eventData of events) {
        const event = this.eventRepository.create(eventData);

        await this.eventRepository.save(event);
      }

      Logger.log('Inserting outcomes...');
      for (const outcomeData of outcomes) {
        const outcome = this.outcomeRepository.create(outcomeData);

        await this.outcomeRepository.save(outcome);
      }

      Logger.log('Inserting users...');
      for (const userData of users) {
        const user = this.userRepository.create(userData);

        await this.userRepository.save(user);
      }

      Logger.log('Database seeded successfully 🚀');
    } catch (error) {
      console.log(error);
      Logger.error('Error seeding database:', error);
    }
  }
}

export { SeederService };
