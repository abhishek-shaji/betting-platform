import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bet } from '../entities/bet.entity';
import { User } from '../entities/user.entity';
import { Outcome } from '../entities/outcome.entity';
import { CreateBetDto } from '../dto/create-bet.dto';
import { Event } from '../entities/event.entity';

@Injectable()
export class BetService {
  constructor(
    @InjectRepository(Bet)
    private betRepository: Repository<Bet>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    @InjectRepository(Outcome)
    private outcomeRepository: Repository<Outcome>,
  ) {}

  async create(createBetDto: CreateBetDto): Promise<Bet> {
    const { userId, eventId, outcomeId, amount } = createBetDto;

    const user = await this.userRepository.findOne({ where: { id: userId } });
    const event = await this.eventRepository.findOne({
      where: { id: eventId },
    });
    const outcome = await this.outcomeRepository.findOne({
      where: {
        id: outcomeId,
        event: {
          id: eventId,
        },
      },
    });

    if (!user || !event || !outcome) {
      throw new Error('User, Event, or Outcome not found');
    }

    const bet = this.betRepository.create({
      user,
      event,
      outcome,
      amount,
      placedAt: new Date(),
    });

    return this.betRepository.save(bet);
  }

  async findAll(userId: number): Promise<Bet[]> {
    return this.betRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
    });
  }
}
