import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Event } from '../entities/event.entity';
import { EventService } from '../services/event.service';

@Controller('event')
@ApiTags('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('')
  @ApiOperation({ summary: 'Get all events' })
  @ApiQuery({ name: 'sportId', required: false })
  @ApiResponse({
    status: 200,
    description: 'Return all events',
    type: Event,
    isArray: true,
  })
  getEvents(@Query('sportId') sportId?: number): Promise<Event[]> {
    return this.eventService.findEvents(sportId);
  }
}
