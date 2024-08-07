import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Event } from './event.entity';

@Entity()
export class Outcome {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the outcome',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Real Madrid',
    description: 'The name of the outcome',
  })
  @Column()
  name: string;

  @ApiProperty({
    example: 2.3,
    description: 'The odds of the outcome',
  })
  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  odds: number;

  @Column()
  eventId: number;
  @ManyToOne(() => Event, (event) => event.outcomes)
  @JoinColumn({ name: 'eventId', referencedColumnName: 'id' })
  event: Event;
}
