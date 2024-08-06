import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { Outcome } from './entities/outcome.entity';
import { Event } from './entities/event.entity';
import { Bet } from './entities/bet.entity';
import { UsersModule } from './modules/user.module';
import { EventsModule } from './modules/events.module';
import { BetModule } from './modules/bet.module';
import { Sport } from './entities/sport.entity';
import { migrations } from './migrations';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
