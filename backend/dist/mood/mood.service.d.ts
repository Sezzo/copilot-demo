import { MoodEntry } from './entities/mood-entry.entity';
import { CreateMoodDto } from './dto/create-mood.dto';
import { UpdateMoodDto } from './dto/update-mood.dto';
export declare class MoodService {
    private moodEntries;
    create(createMoodDto: CreateMoodDto): MoodEntry;
    findAll(): MoodEntry[];
    findByDateRange(startDate: Date, endDate: Date): MoodEntry[];
    findOne(id: string): MoodEntry;
    update(id: string, updateMoodDto: UpdateMoodDto): MoodEntry;
    remove(id: string): void;
    getStats(): {
        average: number;
        total: number;
        weeklyAverage: number;
    };
}
