import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo, CreateTodoDto } from '../../models/todo.model';
import { selectAllTodos, selectTodosLoading, selectTodosError } from '../../store/todos/todo.selectors';
import { loadTodos, createTodo, updateTodo, deleteTodo } from '../../store/todos/todo.actions';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList implements OnInit {
  todos$: Observable<Todo[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  
  newTodo: CreateTodoDto = {
    title: '',
    priority: 'medium'
  };

  showForm = false;

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectAllTodos);
    this.loading$ = this.store.select(selectTodosLoading);
    this.error$ = this.store.select(selectTodosError);
  }

  ngOnInit() {
    this.store.dispatch(loadTodos());
  }

  onSubmit() {
    if (this.newTodo.title.trim()) {
      this.store.dispatch(createTodo({ todo: this.newTodo }));
      this.newTodo = {
        title: '',
        priority: 'medium'
      };
      this.showForm = false;
    }
  }

  toggleComplete(todo: Todo) {
    this.store.dispatch(updateTodo({ 
      id: todo.id, 
      updates: { completed: !todo.completed }
    }));
  }

  deleteTodo(id: string) {
    if (confirm('Are you sure you want to delete this todo?')) {
      this.store.dispatch(deleteTodo({ id }));
    }
  }

  getPriorityClass(priority: string) {
    return {
      'priority-high': priority === 'high',
      'priority-medium': priority === 'medium',
      'priority-low': priority === 'low'
    };
  }

  trackByTodoId(index: number, todo: Todo): string {
    return todo.id;
  }
}
