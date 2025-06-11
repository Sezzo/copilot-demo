import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Todo, CreateTodoDto, UpdateTodoDto } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly baseUrl = 'http://localhost:3000';
  private mockTodos: Todo[] = [
    {
      id: '1',
      title: 'Welcome to the Todo App!',
      description: 'This is a demo todo item. You can create, edit, and delete todos.',
      priority: 'high',
      completed: false,
      dueDate: new Date('2024-12-31'),
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-01')
    },
    {
      id: '2',
      title: 'Try editing this todo',
      description: 'Click on this todo to edit its details.',
      priority: 'medium',
      completed: false,
      dueDate: new Date('2024-06-30'),
      createdAt: new Date('2024-01-02'),
      updatedAt: new Date('2024-01-02')
    },
    {
      id: '3',
      title: 'Mark this as completed',
      description: 'Check the box to mark this todo as done!',
      priority: 'low',
      completed: true,
      dueDate: new Date('2024-01-15'),
      createdAt: new Date('2024-01-03'),
      updatedAt: new Date('2024-01-15')
    }
  ];

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/todos`).pipe(
      catchError(() => of(this.mockTodos))
    );
  }

  getTodo(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.baseUrl}/todos/${id}`).pipe(
      catchError(() => {
        const todo = this.mockTodos.find(t => t.id === id);
        return of(todo!);
      })
    );
  }

  createTodo(todo: CreateTodoDto): Observable<Todo> {
    return this.http.post<Todo>(`${this.baseUrl}/todos`, todo).pipe(
      catchError(() => {
        const newTodo: Todo = {
          id: Date.now().toString(),
          title: todo.title,
          description: todo.description,
          priority: todo.priority,
          completed: false,
          dueDate: todo.dueDate,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        this.mockTodos.push(newTodo);
        return of(newTodo);
      })
    );
  }

  updateTodo(id: string, todo: UpdateTodoDto): Observable<Todo> {
    return this.http.patch<Todo>(`${this.baseUrl}/todos/${id}`, todo).pipe(
      catchError(() => {
        const todoIndex = this.mockTodos.findIndex(t => t.id === id);
        if (todoIndex !== -1) {
          this.mockTodos[todoIndex] = {
            ...this.mockTodos[todoIndex],
            ...todo,
            updatedAt: new Date()
          };
          return of(this.mockTodos[todoIndex]);
        }
        throw new Error(`Todo with id ${id} not found`);
      })
    );
  }

  deleteTodo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/todos/${id}`).pipe(
      catchError(() => {
        const todoIndex = this.mockTodos.findIndex(t => t.id === id);
        if (todoIndex !== -1) {
          this.mockTodos.splice(todoIndex, 1);
        }
        return of(void 0);
      })
    );
  }
}