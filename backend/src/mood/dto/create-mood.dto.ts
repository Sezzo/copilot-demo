export class CreateMoodDto {
  rating: number; // 1-5 stars
  notes?: string;
  date?: Date;
}