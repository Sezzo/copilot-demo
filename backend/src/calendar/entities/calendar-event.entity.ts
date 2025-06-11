export class CalendarEvent {
  id: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  isAllDay: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    title: string,
    startDate: Date,
    endDate: Date,
    isAllDay: boolean,
    description?: string,
    location?: string,
  ) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
    this.isAllDay = isAllDay;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}