import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Event } from './event.entity';
import { Outcome } from './outcome.entity';
import { User } from './user.entity';

@Entity()
export class Bet {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the sport',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 100,
    description: 'The amount of the bet',
  })
  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @ApiProperty({
    example: new Date(),
    description: 'The time the bet was placed',
  })
  @Column()
  placedAt: Date;

  @ManyToOne(() => User, (user) => user.bets)
  user: User;

  @ApiProperty({
    description: 'The event the bet is placed on',
    type: Event,
  })
  @ManyToOne(() => Event, (event) => event.bets, { eager: true })
  event: Event;

  @ApiProperty({
    description: 'The outcome the bet is placed on',
    type: Outcome,
  })
  @ManyToOne(() => Outcome, { eager: true })
  outcome: Outcome;
}
