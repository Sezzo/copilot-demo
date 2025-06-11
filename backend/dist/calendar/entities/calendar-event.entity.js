"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarEvent = void 0;
class CalendarEvent {
    id;
    title;
    description;
    startDate;
    endDate;
    location;
    isAllDay;
    createdAt;
    updatedAt;
    constructor(title, startDate, endDate, isAllDay, description, location) {
        this.id = Math.random().toString(36).substr(2, 9);
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.isAllDay = isAllDay;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
exports.CalendarEvent = CalendarEvent;
//# sourceMappingURL=calendar-event.entity.js.map