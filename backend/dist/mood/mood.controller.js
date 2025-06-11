"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoodController = void 0;
const common_1 = require("@nestjs/common");
const mood_service_1 = require("./mood.service");
const create_mood_dto_1 = require("./dto/create-mood.dto");
const update_mood_dto_1 = require("./dto/update-mood.dto");
let MoodController = class MoodController {
    moodService;
    constructor(moodService) {
        this.moodService = moodService;
    }
    create(createMoodDto) {
        return this.moodService.create(createMoodDto);
    }
    findAll(startDate, endDate) {
        if (startDate && endDate) {
            return this.moodService.findByDateRange(new Date(startDate), new Date(endDate));
        }
        return this.moodService.findAll();
    }
    getStats() {
        return this.moodService.getStats();
    }
    findOne(id) {
        return this.moodService.findOne(id);
    }
    update(id, updateMoodDto) {
        return this.moodService.update(id, updateMoodDto);
    }
    remove(id) {
        return this.moodService.remove(id);
    }
};
exports.MoodController = MoodController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mood_dto_1.CreateMoodDto]),
    __metadata("design:returntype", void 0)
], MoodController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('startDate')),
    __param(1, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], MoodController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('stats'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MoodController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoodController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_mood_dto_1.UpdateMoodDto]),
    __metadata("design:returntype", void 0)
], MoodController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoodController.prototype, "remove", null);
exports.MoodController = MoodController = __decorate([
    (0, common_1.Controller)('mood'),
    __metadata("design:paramtypes", [mood_service_1.MoodService])
], MoodController);
//# sourceMappingURL=mood.controller.js.map