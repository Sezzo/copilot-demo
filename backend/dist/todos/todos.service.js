"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const todo_entity_1 = require("./entities/todo.entity");
let TodosService = class TodosService {
    todos = [];
    create(createTodoDto) {
        const todo = new todo_entity_1.Todo(createTodoDto.title, createTodoDto.priority, createTodoDto.description, createTodoDto.dueDate);
        this.todos.push(todo);
        return todo;
    }
    findAll() {
        return this.todos.sort((a, b) => {
            if (a.completed !== b.completed) {
                return a.completed ? 1 : -1;
            }
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        });
    }
    findOne(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) {
            throw new Error(`Todo with ID ${id} not found`);
        }
        return todo;
    }
    update(id, updateTodoDto) {
        const todo = this.findOne(id);
        Object.assign(todo, updateTodoDto);
        todo.updatedAt = new Date();
        return todo;
    }
    remove(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index === -1) {
            throw new Error(`Todo with ID ${id} not found`);
        }
        this.todos.splice(index, 1);
    }
};
exports.TodosService = TodosService;
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)()
], TodosService);
//# sourceMappingURL=todos.service.js.map