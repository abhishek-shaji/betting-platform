import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Outcome } from './outcome.entity';
import { Bet } from './bet.entity';
import { Sport } from './sport.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  startTime: Date;

  @OneToMany(() => Outcome, (outcome) => outcome.event, { eager: true })
  outcomes: Outcome[];

  @OneToMany(() => Bet, (bet) => bet.event)
  bets: Bet[];

  @Column()
  sportId: number;
  @ManyToOne(() => Sport, (sport) => sport.events)
  @JoinColumn({ name: 'sportId', referencedColumnName: 'id' })
  sport: Sport;
}
