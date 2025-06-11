export declare class MoodEntry {
    id: string;
    rating: number;
    notes?: string;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
    constructor(rating: number, notes?: string, date?: Date);
}
