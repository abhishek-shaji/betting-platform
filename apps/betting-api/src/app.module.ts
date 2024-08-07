import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Bet } from './entities/bet.entity';
import { Event } from './entities/event.entity';
import { Outcome } from './entities/outcome.entity';
import { Sport } from './entities/sport.entity';
import { User } from './entities/user.entity';
import { migrations } from './migrations';
import { BetModule } from './modules/bet.module';
import { EventsModule } from './modules/events.module';
import { SportsModule } from './modules/sports.module';
import { UsersModule } from './modules/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [User, Outcome, Event, Bet, Sport],
      migrations,
      synchronize: false,
      migrationsRun: true,
    }),
    UsersModule,
    EventsModule,
    BetModule,
    SportsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
