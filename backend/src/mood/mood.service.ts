import { Injectable } from '@nestjs/common';
import { MoodEntry } from './entities/mood-entry.entity';
import { CreateMoodDto } from './dto/create-mood.dto';
import { UpdateMoodDto } from './dto/update-mood.dto';

@Injectable()
export class MoodService {
  private moodEntries: MoodEntry[] = [];

  create(createMoodDto: CreateMoodDto): MoodEntry {
    const entry = new MoodEntry(
      createMoodDto.rating,
      createMoodDto.notes,
      createMoodDto.date,
    );
    this.moodEntries.push(entry);
    return entry;
  }

  findAll(): MoodEntry[] {
    return this.moodEntries.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  findByDateRange(startDate: Date, endDate: Date): MoodEntry[] {
    return this.moodEntries.filter(
      entry => entry.date >= startDate && entry.date <= endDate
    ).sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  findOne(id: string): MoodEntry {
    const entry = this.moodEntries.find(entry => entry.id === id);
    if (!entry) {
      throw new Error(`Mood entry with ID ${id} not found`);
    }
    return entry;
  }

  update(id: string, updateMoodDto: UpdateMoodDto): MoodEntry {
    const entry = this.findOne(id);
    Object.assign(entry, updateMoodDto);
    entry.updatedAt = new Date();
    return entry;
  }

  remove(id: string): void {
    const index = this.moodEntries.findIndex(entry => entry.id === id);
    if (index === -1) {
      throw new Error(`Mood entry with ID ${id} not found`);
    }
    this.moodEntries.splice(index, 1);
  }

  getStats(): { average: number; total: number; weeklyAverage: number } {
    if (this.moodEntries.length === 0) {
      return { average: 0, total: 0, weeklyAverage: 0 };
    }

    const total = this.moodEntries.length;
    const average = this.moodEntries.reduce((sum, entry) => sum + entry.rating, 0) / total;

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weeklyEntries = this.moodEntries.filter(entry => entry.date >= weekAgo);
    const weeklyAverage = weeklyEntries.length > 0 
      ? weeklyEntries.reduce((sum, entry) => sum + entry.rating, 0) / weeklyEntries.length 
      : 0;

    return { average: Math.round(average * 100) / 100, total, weeklyAverage: Math.round(weeklyAverage * 100) / 100 };
  }
}
