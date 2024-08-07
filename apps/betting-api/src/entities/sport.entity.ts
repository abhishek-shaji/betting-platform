import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Event } from './event.entity';

@Entity()
export class Sport {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the sport',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 1,
    description: 'The name of the sport',
  })
  @Column()
  name: string;

  @OneToMany(() => Event, (event) => event.sport)
  events: Event[];
}
