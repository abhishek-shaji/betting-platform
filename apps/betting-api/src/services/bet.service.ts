import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Bet } from '../entities/bet.entity';
import { Outcome } from '../entities/outcome.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class BetService {
  constructor(
    @InjectRepository(Bet)
    private betRepository: Repository<Bet>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Outcome)
    private outcomeRepository: Repository<Outcome>,
  ) {}

  async create(
    outcomeId: number,
    data: {
      userId: number;
      amount: number;
    },
  ): Promise<Bet> {
    const { userId, amount } = data;

    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      // TODO: This should be handled by the auth logic
      throw new UnauthorizedException('Unauthorized');
    }

    const outcome = await this.outcomeRepository.findOne({
      where: {
        id: outcomeId,
      },
    });

    if (!outcome) {
      throw new BadRequestException('Outcome not found');
    }

    const bet = this.betRepository.create({
      user,
      event: {
        id: outcome.eventId,
      },
      outcome,
      amount,
      placedAt: new Date(),
    });

    return this.betRepository.save(bet);
  }

  async findAll(userId: number): Promise<Bet[]> {
    return this.betRepository.findBy({
      user: {
        id: userId,
      },
    });
  }
}
