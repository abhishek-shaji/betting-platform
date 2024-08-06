import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { BetService } from '../services/bet.service';
import { CreateBetDto } from '../dto/create-bet.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('bets')
@ApiTags('bets')
export class BetController {
  constructor(private readonly betService: BetService) {}

  @Get(':userId')
  @ApiOperation({ summary: 'Get all bets for user' })
  @ApiResponse({ status: 200, description: 'Return all bets for user' })
  getBets(@Param('userId') userId: number) {
    return this.betService.findAll(userId);
  }

  @Post('create')
  @ApiOperation({ summary: 'Place a bet' })
  @ApiResponse({ status: 200, description: 'Return the bet' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createBetDto: CreateBetDto) {
    return this.betService.create(createBetDto);
  }
}
