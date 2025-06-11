export interface MoodEntry {
  id: string;
  rating: number; // 1-5 stars
  notes?: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateMoodDto {
  rating: number; // 1-5 stars
  notes?: string;
  date?: Date;
}

export interface UpdateMoodDto {
  rating?: number; // 1-5 stars
  notes?: string;
}

export interface MoodStats {
  average: number;
  total: number;
  weeklyAverage: number;
}