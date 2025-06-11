import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarService } from '../../services/calendar.service';
import { CalendarEvent, CreateEventDto } from '../../models/calendar.model';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule, FormsModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss'
})
export class Calendar implements OnInit {
  events: CalendarEvent[] = [];
  loading = false;
  showForm = false;
  
  newEvent: CreateEventDto = {
    title: '',
    startDate: new Date(),
    endDate: new Date(),
    isAllDay: false
  };

  currentDate = new Date();

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {
    this.loadEvents();
    this.initializeEventDates();
  }

  initializeEventDates() {
    const now = new Date();
    const endDate = new Date(now);
    endDate.setHours(now.getHours() + 1);
    
    this.newEvent.startDate = now;
    this.newEvent.endDate = endDate;
  }

  loadEvents() {
    this.loading = true;
    this.calendarService.getEvents().subscribe({
      next: (events) => {
        this.events = events.map(event => ({
          ...event,
          startDate: new Date(event.startDate),
          endDate: new Date(event.endDate)
        }));
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading events:', error);
        this.loading = false;
      }
    });
  }

  onSubmit() {
    if (this.newEvent.title.trim()) {
      this.calendarService.createEvent(this.newEvent).subscribe({
        next: (event) => {
          this.events.push({
            ...event,
            startDate: new Date(event.startDate),
            endDate: new Date(event.endDate)
          });
          this.events.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
          this.resetForm();
        },
        error: (error) => {
          console.error('Error creating event:', error);
        }
      });
    }
  }

  resetForm() {
    this.initializeEventDates();
    this.newEvent.title = '';
    this.newEvent.description = '';
    this.newEvent.location = '';
    this.newEvent.isAllDay = false;
    this.showForm = false;
  }

  deleteEvent(id: string) {
    if (confirm('Are you sure you want to delete this event?')) {
      this.calendarService.deleteEvent(id).subscribe({
        next: () => {
          this.events = this.events.filter(e => e.id !== id);
        },
        error: (error) => {
          console.error('Error deleting event:', error);
        }
      });
    }
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  isUpcoming(date: Date): boolean {
    return date > new Date();
  }

  trackByEventId(index: number, event: CalendarEvent): string {
    return event.id;
  }

  updateStartDate(event: any) {
    this.newEvent.startDate = new Date(event.target.value);
  }

  updateEndDate(event: any) {
    this.newEvent.endDate = new Date(event.target.value);
  }
}
