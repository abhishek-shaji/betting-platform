import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SportsController } from '../controllers/sport.controller';
import { Sport } from '../entities/sport.entity';
import { SportService } from '../services/sport.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sport])],
  exports: [TypeOrmModule],
  controllers: [SportsController],
  providers: [SportService],
})
export class SportsModule {}
