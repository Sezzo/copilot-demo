export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  isAllDay: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateEventDto {
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  isAllDay: boolean;
}

export interface UpdateEventDto {
  title?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  location?: string;
  isAllDay?: boolean;
}