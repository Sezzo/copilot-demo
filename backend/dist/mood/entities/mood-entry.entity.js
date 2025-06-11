"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoodEntry = void 0;
class MoodEntry {
    id;
    rating;
    notes;
    date;
    createdAt;
    updatedAt;
    constructor(rating, notes, date) {
        this.id = Math.random().toString(36).substr(2, 9);
        this.rating = rating;
        this.notes = notes;
        this.date = date || new Date();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
exports.MoodEntry = MoodEntry;
//# sourceMappingURL=mood-entry.entity.js.map