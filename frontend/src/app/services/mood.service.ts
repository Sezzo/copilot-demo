import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoodEntry, CreateMoodDto, UpdateMoodDto, MoodStats } from '../models/mood.model';

@Injectable({
  providedIn: 'root'
})
export class MoodService {
  private readonly baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getMoodEntries(): Observable<MoodEntry[]> {
    return this.http.get<MoodEntry[]>(`${this.baseUrl}/mood`);
  }

  getMoodEntriesByDateRange(startDate: Date, endDate: Date): Observable<MoodEntry[]> {
    const params = {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString()
    };
    return this.http.get<MoodEntry[]>(`${this.baseUrl}/mood`, { params });
  }

  getMoodEntry(id: string): Observable<MoodEntry> {
    return this.http.get<MoodEntry>(`${this.baseUrl}/mood/${id}`);
  }

  createMoodEntry(entry: CreateMoodDto): Observable<MoodEntry> {
    return this.http.post<MoodEntry>(`${this.baseUrl}/mood`, entry);
  }

  updateMoodEntry(id: string, entry: UpdateMoodDto): Observable<MoodEntry> {
    return this.http.patch<MoodEntry>(`${this.baseUrl}/mood/${id}`, entry);
  }

  deleteMoodEntry(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/mood/${id}`);
  }

  getMoodStats(): Observable<MoodStats> {
    return this.http.get<MoodStats>(`${this.baseUrl}/mood/stats`);
  }
}