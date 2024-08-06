import { Controller, Get, Query } from '@nestjs/common';
import { EventService } from '../services/event.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('events')
@ApiTags('events')
export class EventsController {
  constructor(private readonly eventService: EventService) {}

  @Get('')
  @ApiOperation({ summary: 'Get all events' })
  @ApiQuery({ name: 'sportId', required: false })
  @ApiResponse({ status: 200, description: 'Return all events' })
  getEvents(@Query('sportId') sportId?: number) {
    return this.eventService.findEvents(sportId);
  }
}
