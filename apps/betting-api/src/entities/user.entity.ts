import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Bet } from './bet.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  id: number;

  @Column({ name: 'user_name' })
  name: string;

  @Column({ name: 'user_email' })
  email: string;

  @OneToMany(() => Bet, (bet) => bet.user)
  bets: Bet[];
}
