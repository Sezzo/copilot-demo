import { Injectable } from '@nestjs/common';
import { CalendarEvent } from './entities/calendar-event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class CalendarService {
  private events: CalendarEvent[] = [];

  create(createEventDto: CreateEventDto): CalendarEvent {
    const event = new CalendarEvent(
      createEventDto.title,
      createEventDto.startDate,
      createEventDto.endDate,
      createEventDto.isAllDay,
      createEventDto.description,
      createEventDto.location,
    );
    this.events.push(event);
    return event;
  }

  findAll(): CalendarEvent[] {
    return this.events.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
  }

  findByDateRange(startDate: Date, endDate: Date): CalendarEvent[] {
    return this.events.filter(
      event =>
        event.startDate <= endDate && event.endDate >= startDate
    ).sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
  }

  findOne(id: string): CalendarEvent {
    const event = this.events.find(event => event.id === id);
    if (!event) {
      throw new Error(`Event with ID ${id} not found`);
    }
    return event;
  }

  update(id: string, updateEventDto: UpdateEventDto): CalendarEvent {
    const event = this.findOne(id);
    Object.assign(event, updateEventDto);
    event.updatedAt = new Date();
    return event;
  }

  remove(id: string): void {
    const index = this.events.findIndex(event => event.id === id);
    if (index === -1) {
      throw new Error(`Event with ID ${id} not found`);
    }
    this.events.splice(index, 1);
  }
}
