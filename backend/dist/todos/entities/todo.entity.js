"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    id;
    title;
    description;
    priority;
    completed;
    dueDate;
    createdAt;
    updatedAt;
    constructor(title, priority, description, dueDate) {
        this.id = Math.random().toString(36).substr(2, 9);
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.completed = false;
        this.dueDate = dueDate;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
exports.Todo = Todo;
//# sourceMappingURL=todo.entity.js.map