import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalendarEvent, CreateEventDto, UpdateEventDto } from '../models/calendar.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private readonly baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<CalendarEvent[]> {
    return this.http.get<CalendarEvent[]>(`${this.baseUrl}/calendar`);
  }

  getEventsByDateRange(startDate: Date, endDate: Date): Observable<CalendarEvent[]> {
    const params = {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString()
    };
    return this.http.get<CalendarEvent[]>(`${this.baseUrl}/calendar`, { params });
  }

  getEvent(id: string): Observable<CalendarEvent> {
    return this.http.get<CalendarEvent>(`${this.baseUrl}/calendar/${id}`);
  }

  createEvent(event: CreateEventDto): Observable<CalendarEvent> {
    return this.http.post<CalendarEvent>(`${this.baseUrl}/calendar`, event);
  }

  updateEvent(id: string, event: UpdateEventDto): Observable<CalendarEvent> {
    return this.http.patch<CalendarEvent>(`${this.baseUrl}/calendar/${id}`, event);
  }

  deleteEvent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/calendar/${id}`);
  }
}