"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoodService = void 0;
const common_1 = require("@nestjs/common");
const mood_entry_entity_1 = require("./entities/mood-entry.entity");
let MoodService = class MoodService {
    moodEntries = [];
    create(createMoodDto) {
        const entry = new mood_entry_entity_1.MoodEntry(createMoodDto.rating, createMoodDto.notes, createMoodDto.date);
        this.moodEntries.push(entry);
        return entry;
    }
    findAll() {
        return this.moodEntries.sort((a, b) => b.date.getTime() - a.date.getTime());
    }
    findByDateRange(startDate, endDate) {
        return this.moodEntries.filter(entry => entry.date >= startDate && entry.date <= endDate).sort((a, b) => b.date.getTime() - a.date.getTime());
    }
    findOne(id) {
        const entry = this.moodEntries.find(entry => entry.id === id);
        if (!entry) {
            throw new Error(`Mood entry with ID ${id} not found`);
        }
        return entry;
    }
    update(id, updateMoodDto) {
        const entry = this.findOne(id);
        Object.assign(entry, updateMoodDto);
        entry.updatedAt = new Date();
        return entry;
    }
    remove(id) {
        const index = this.moodEntries.findIndex(entry => entry.id === id);
        if (index === -1) {
            throw new Error(`Mood entry with ID ${id} not found`);
        }
        this.moodEntries.splice(index, 1);
    }
    getStats() {
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
};
exports.MoodService = MoodService;
exports.MoodService = MoodService = __decorate([
    (0, common_1.Injectable)()
], MoodService);
//# sourceMappingURL=mood.service.js.map