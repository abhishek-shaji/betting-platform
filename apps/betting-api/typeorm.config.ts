import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

import { Bet } from './src/entities/bet.entity';
import { Event } from './src/entities/event.entity';
import { Outcome } from './src/entities/outcome.entity';
import { Sport } from './src/entities/sport.entity';
import { User } from './src/entities/user.entity';

dotenv.config();

export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Bet, Event, Outcome, Sport, User],
  migrations: ['src/migrations/*.ts'],
});
