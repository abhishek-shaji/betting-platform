import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from '../entities/event.entity';
import { Outcome } from '../entities/outcome.entity';
import { SeederService } from '../services/seeder.service';
import { User } from '../entities/user.entity';
import { Bet } from '../entities/bet.entity';
import { Sport } from '../entities/sport.entity';
import { migrations } from '../migrations';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [User, Outcome, Event, Bet, Sport],
      migrations,
      synchronize: false,
      migrationsRun: true,
    }),
    TypeOrmModule.forFeature([Event, Outcome, User, Sport]),
  ],
  exports: [TypeOrmModule],
  controllers: [],
  providers: [SeederService],
})
export class SeedModule {}
