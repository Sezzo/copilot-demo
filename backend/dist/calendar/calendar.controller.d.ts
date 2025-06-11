import { CalendarService } from './calendar.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class CalendarController {
    private readonly calendarService;
    constructor(calendarService: CalendarService);
    create(createEventDto: CreateEventDto): import("./entities/calendar-event.entity").CalendarEvent;
    findAll(startDate?: string, endDate?: string): import("./entities/calendar-event.entity").CalendarEvent[];
    findOne(id: string): import("./entities/calendar-event.entity").CalendarEvent;
    update(id: string, updateEventDto: UpdateEventDto): import("./entities/calendar-event.entity").CalendarEvent;
    remove(id: string): void;
}
