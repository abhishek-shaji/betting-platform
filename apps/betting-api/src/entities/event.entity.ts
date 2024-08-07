import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Bet } from './bet.entity';
import { Outcome } from './outcome.entity';
import { Sport } from './sport.entity';

@Entity()
export class Event {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the event',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Olympic France vs Olympic Egypt',
    description: 'The name of the event',
  })
  @Column()
  name: string;

  @ApiProperty({
    example: new Date(),
    description: 'The start time of the event',
  })
  @Column()
  startTime: Date;

  @ApiProperty({
    type: Outcome,
    isArray: true,
  })
  @OneToMany(() => Outcome, (outcome) => outcome.event, { eager: true })
  outcomes: Outcome[];

  @OneToMany(() => Bet, (bet) => bet.event)
  bets: Bet[];

  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the sport',
  })
  @Column()
  sportId: number;
  @ManyToOne(() => Sport, (sport) => sport.events)
  @JoinColumn({ name: 'sportId', referencedColumnName: 'id' })
  sport: Sport;
}
