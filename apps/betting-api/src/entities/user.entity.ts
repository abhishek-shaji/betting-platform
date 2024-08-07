import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Bet } from './bet.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Bet, (bet) => bet.user)
  bets: Bet[];
}
