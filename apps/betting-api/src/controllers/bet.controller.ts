import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { DEFAULT_USER_ID } from '../../constants';
import { CreateBetDto } from '../dto/create-bet.dto';
import { RequestErrorDto } from '../dto/request-error.dto';
import { Bet } from '../entities/bet.entity';
import { BetService } from '../services/bet.service';

@Controller('bet')
@ApiTags('bet')
export class BetController {
  constructor(private readonly betService: BetService) {}

  @Get('')
  @ApiOperation({ summary: 'Get all bets for user' })
  @ApiResponse({
    status: 200,
    description: 'Return all bets for user',
    type: Bet,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    type: RequestErrorDto,
  })
  getBets() {
    // TODO: user id should be retrieved from the auth logic
    return this.betService.findAll(DEFAULT_USER_ID);
  }

  @Post(':outcomeId')
  @ApiOperation({ summary: 'Place a bet' })
  @ApiParam({
    name: 'outcomeId',
    description: 'The unique identifier of the outcome',
    type: 'number',
  })
  @ApiResponse({ status: 200, description: 'Return the bet', type: Bet })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
    type: RequestErrorDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    type: RequestErrorDto,
  })
  create(
    @Param('outcomeId') outcomeId: number,
    @Body() createBetDto: CreateBetDto,
  ) {
    return this.betService.create(outcomeId, {
      ...createBetDto,
      // TODO: user id should be retrieved from the auth logic
      userId: DEFAULT_USER_ID,
    });
  }
}
