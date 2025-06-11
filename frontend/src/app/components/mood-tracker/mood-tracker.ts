import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoodService } from '../../services/mood.service';
import { MoodEntry, CreateMoodDto, MoodStats } from '../../models/mood.model';

@Component({
  selector: 'app-mood-tracker',
  imports: [CommonModule, FormsModule],
  templateUrl: './mood-tracker.html',
  styleUrl: './mood-tracker.scss'
})
export class MoodTracker implements OnInit {
  moods: MoodEntry[] = [];
  stats: MoodStats = { average: 0, total: 0, weeklyAverage: 0 };
  loading = false;
  
  newMood: CreateMoodDto = {
    rating: 3,
    notes: ''
  };

  stars = [1, 2, 3, 4, 5];

  constructor(private moodService: MoodService) {}

  ngOnInit() {
    this.loadMoods();
    this.loadStats();
  }

  loadMoods() {
    this.loading = true;
    this.moodService.getMoodEntries().subscribe({
      next: (moods) => {
        this.moods = moods;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading moods:', error);
        this.loading = false;
      }
    });
  }

  loadStats() {
    this.moodService.getMoodStats().subscribe({
      next: (stats) => {
        this.stats = stats;
      },
      error: (error) => {
        console.error('Error loading stats:', error);
      }
    });
  }

  onSubmit() {
    if (this.newMood.rating > 0) {
      this.moodService.createMoodEntry(this.newMood).subscribe({
        next: (mood) => {
          this.moods.unshift(mood);
          this.newMood = { rating: 3, notes: '' };
          this.loadStats();
        },
        error: (error) => {
          console.error('Error creating mood:', error);
        }
      });
    }
  }

  setRating(rating: number) {
    this.newMood.rating = rating;
  }

  getStarsArray(rating: number): boolean[] {
    return this.stars.map(star => star <= rating);
  }

  getMoodText(rating: number): string {
    switch(rating) {
      case 1: return 'Very Sad';
      case 2: return 'Sad';
      case 3: return 'Neutral';
      case 4: return 'Happy';
      case 5: return 'Very Happy';
      default: return 'Unknown';
    }
  }

  trackByMoodId(index: number, mood: MoodEntry): string {
    return mood.id;
  }
}
