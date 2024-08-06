import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Event } from './event.entity';
import { Outcome } from './outcome.entity';

@Entity()
export class Bet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column()
  placedAt: Date;

  @ManyToOne(() => User, (user) => user.bets)
  user: User;

  @ManyToOne(() => Event, (event) => event.bets)
  event: Event;

  @ManyToOne(() => Outcome)
  outcome: Outcome;
}
