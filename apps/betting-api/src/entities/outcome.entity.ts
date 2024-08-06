import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class Outcome {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

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
