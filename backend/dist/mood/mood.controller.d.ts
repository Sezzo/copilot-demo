import { MoodService } from './mood.service';
import { CreateMoodDto } from './dto/create-mood.dto';
import { UpdateMoodDto } from './dto/update-mood.dto';
export declare class MoodController {
    private readonly moodService;
    constructor(moodService: MoodService);
    create(createMoodDto: CreateMoodDto): import("./entities/mood-entry.entity").MoodEntry;
    findAll(startDate?: string, endDate?: string): import("./entities/mood-entry.entity").MoodEntry[];
    getStats(): {
        average: number;
        total: number;
        weeklyAverage: number;
    };
    findOne(id: string): import("./entities/mood-entry.entity").MoodEntry;
    update(id: string, updateMoodDto: UpdateMoodDto): import("./entities/mood-entry.entity").MoodEntry;
    remove(id: string): void;
}
