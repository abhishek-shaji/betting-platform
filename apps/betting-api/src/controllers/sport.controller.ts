import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Sport } from '../entities/sport.entity';
import { SportService } from '../services/sport.service';

@Controller('sport')
@ApiTags('sport')
export class SportsController {
  constructor(private readonly sportService: SportService) {}

  @Get('')
  @ApiOperation({ summary: 'Get all sports' })
  @ApiResponse({
    status: 200,
    description: 'Return all sports',
    type: Sport,
    isArray: true,
  })
  getSports(): Promise<Sport[]> {
    return this.sportService.findAll();
  }
}
