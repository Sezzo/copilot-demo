export class MoodEntry {
  id: string;
  rating: number; // 1-5 stars
  notes?: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor(rating: number, notes?: string, date?: Date) {
    this.id = Math.random().toString(36).substr(2, 9);
    this.rating = rating;
    this.notes = notes;
    this.date = date || new Date();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}