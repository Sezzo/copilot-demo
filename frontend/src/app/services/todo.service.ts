import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo, CreateTodoDto, UpdateTodoDto } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/todos`);
  }

  getTodo(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.baseUrl}/todos/${id}`);
  }

  createTodo(todo: CreateTodoDto): Observable<Todo> {
    return this.http.post<Todo>(`${this.baseUrl}/todos`, todo);
  }

  updateTodo(id: string, todo: UpdateTodoDto): Observable<Todo> {
    return this.http.patch<Todo>(`${this.baseUrl}/todos/${id}`, todo);
  }

  deleteTodo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/todos/${id}`);
  }
}