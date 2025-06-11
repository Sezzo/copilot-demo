export class Todo {
  id: string;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor(title: string, priority: 'low' | 'medium' | 'high', description?: string, dueDate?: Date) {
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