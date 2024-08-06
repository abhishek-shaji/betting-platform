import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from '../entities/event.entity';
import { Repository } from 'typeorm';
import { Outcome } from '../entities/outcome.entity';
import { events } from '../seeds/events';
import { outcomes } from '../seeds/outcomes';
import { User } from '../entities/user.entity';
import { users } from '../seeds/users';
import { Sport } from '../entities/sport.entity';
import { sports } from '../seeds/sports';

@Injectable()
class SeederService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
    @InjectRepository(Outcome) private outcomeRepository: Repository<Outcome>,
    @InjectRepository(Sport) private sportRepository: Repository<Sport>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async deleteExistingData() {
    Logger.log('Deleting existing data...');
    await this.outcomeRepository.delete({});
    await this.sportRepository.delete({});
    await this.eventRepository.delete({});
    await this.userRepository.delete({});
    Logger.log('Existing data deleted');
  }

  async seed() {
    try {
      await this.deleteExistingData();
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
