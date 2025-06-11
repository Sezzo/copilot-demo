import { CalendarEvent } from './entities/calendar-event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class CalendarService {
    private events;
    create(createEventDto: CreateEventDto): CalendarEvent;
    findAll(): CalendarEvent[];
    findByDateRange(startDate: Date, endDate: Date): CalendarEvent[];
    findOne(id: string): CalendarEvent;
    update(id: string, updateEventDto: UpdateEventDto): CalendarEvent;
    remove(id: string): void;
}
