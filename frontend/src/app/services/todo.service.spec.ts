import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { TodoService } from './todo.service';
import { Todo, CreateTodoDto, UpdateTodoDto } from '../models/todo.model';

describe('TodoService', () => {
  let service: TodoService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'patch', 'delete']);

    TestBed.configureTestingModule({
      providers: [
        TodoService,
        { provide: HttpClient, useValue: spy }
      ]
    });
    service = TestBed.inject(TodoService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTodos', () => {
    it('should return mock todos when HTTP call fails', (done) => {
      httpClientSpy.get.and.returnValue(throwError(() => new Error('Network error')));

      service.getTodos().subscribe(todos => {
        expect(todos).toBeTruthy();
        expect(todos.length).toBeGreaterThan(0);
        expect(todos[0].title).toBe('Welcome to the Todo App!');
        done();
      });
    });

    it('should return server data when HTTP call succeeds', (done) => {
      const mockServerTodos: Todo[] = [
        {
          id: 'server-1',
          title: 'Server Todo',
          priority: 'high',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];
      httpClientSpy.get.and.returnValue(of(mockServerTodos));

      service.getTodos().subscribe(todos => {
        expect(todos).toEqual(mockServerTodos);
        done();
      });
    });
  });

  describe('createTodo', () => {
    it('should create mock todo when HTTP call fails', (done) => {
      const newTodo: CreateTodoDto = {
        title: 'Test Todo',
        priority: 'medium'
      };
      httpClientSpy.post.and.returnValue(throwError(() => new Error('Network error')));

      service.createTodo(newTodo).subscribe(todo => {
        expect(todo).toBeTruthy();
        expect(todo.title).toBe('Test Todo');
        expect(todo.priority).toBe('medium');
        expect(todo.completed).toBe(false);
        done();
      });
    });
  });

  describe('updateTodo', () => {
    it('should update mock todo when HTTP call fails', (done) => {
      const updateData: UpdateTodoDto = {
        title: 'Updated Title',
        completed: true
      };
      httpClientSpy.patch.and.returnValue(throwError(() => new Error('Network error')));

      service.updateTodo('1', updateData).subscribe(todo => {
        expect(todo).toBeTruthy();
        expect(todo.title).toBe('Updated Title');
        expect(todo.completed).toBe(true);
        done();
      });
    });
  });

  describe('deleteTodo', () => {
    it('should delete mock todo when HTTP call fails', (done) => {
      httpClientSpy.delete.and.returnValue(throwError(() => new Error('Network error')));

      service.deleteTodo('1').subscribe(() => {
        // Should complete without error
        done();
      });
    });
  });
});