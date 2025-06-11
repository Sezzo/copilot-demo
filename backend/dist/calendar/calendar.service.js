"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarService = void 0;
const common_1 = require("@nestjs/common");
const calendar_event_entity_1 = require("./entities/calendar-event.entity");
let CalendarService = class CalendarService {
    events = [];
    create(createEventDto) {
        const event = new calendar_event_entity_1.CalendarEvent(createEventDto.title, createEventDto.startDate, createEventDto.endDate, createEventDto.isAllDay, createEventDto.description, createEventDto.location);
        this.events.push(event);
        return event;
    }
    findAll() {
        return this.events.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
    }
    findByDateRange(startDate, endDate) {
        return this.events.filter(event => event.startDate <= endDate && event.endDate >= startDate).sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
    }
    findOne(id) {
        const event = this.events.find(event => event.id === id);
        if (!event) {
            throw new Error(`Event with ID ${id} not found`);
        }
        return event;
    }
    update(id, updateEventDto) {
        const event = this.findOne(id);
        Object.assign(event, updateEventDto);
        event.updatedAt = new Date();
        return event;
    }
    remove(id) {
        const index = this.events.findIndex(event => event.id === id);
        if (index === -1) {
            throw new Error(`Event with ID ${id} not found`);
        }
        this.events.splice(index, 1);
    }
};
exports.CalendarService = CalendarService;
exports.CalendarService = CalendarService = __decorate([
    (0, common_1.Injectable)()
], CalendarService);
//# sourceMappingURL=calendar.service.js.map