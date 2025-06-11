export declare class CalendarEvent {
    id: string;
    title: string;
    description?: string;
    startDate: Date;
    endDate: Date;
    location?: string;
    isAllDay: boolean;
    createdAt: Date;
    updatedAt: Date;
    constructor(title: string, startDate: Date, endDate: Date, isAllDay: boolean, description?: string, location?: string);
}
