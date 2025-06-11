import { Injectable } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  create(createTodoDto: CreateTodoDto): Todo {
    const todo = new Todo(
      createTodoDto.title,
      createTodoDto.priority,
      createTodoDto.description,
      createTodoDto.dueDate,
    );
    this.todos.push(todo);
    return todo;
  }

  findAll(): Todo[] {
    return this.todos.sort((a, b) => {
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
      }
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  }

  findOne(id: string): Todo {
    const todo = this.todos.find(todo => todo.id === id);
    if (!todo) {
      throw new Error(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  update(id: string, updateTodoDto: UpdateTodoDto): Todo {
    const todo = this.findOne(id);
    Object.assign(todo, updateTodoDto);
    todo.updatedAt = new Date();
    return todo;
  }

  remove(id: string): void {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index === -1) {
      throw new Error(`Todo with ID ${id} not found`);
    }
    this.todos.splice(index, 1);
  }
}
