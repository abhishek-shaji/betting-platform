import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BetsController } from '../controllers/bets.controller';
import { Bet } from '../entities/bet.entity';
import { Event } from '../entities/event.entity';
import { Outcome } from '../entities/outcome.entity';
import { Sport } from '../entities/sport.entity';
import { User } from '../entities/user.entity';
import { BetService } from '../services/bet.service';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Outcome, Bet, User, Sport])],
  exports: [TypeOrmModule],
  controllers: [BetsController],
  providers: [BetService],
})
export class BetModule {}
