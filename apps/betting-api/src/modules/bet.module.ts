import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from '../entities/event.entity';
import { Outcome } from '../entities/outcome.entity';

import { BetController } from '../controllers/bet.controller';
import { BetService } from '../services/bet.service';
import { Bet } from '../entities/bet.entity';
import { User } from '../entities/user.entity';
import { Sport } from '../entities/sport.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Outcome, Bet, User, Sport])],
  exports: [TypeOrmModule],
  controllers: [BetController],
  providers: [BetService],
})
export class BetModule {}
