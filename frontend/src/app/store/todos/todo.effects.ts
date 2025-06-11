import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TodoService } from '../../services/todo.service';
import * as TodoActions from './todo.actions';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      mergeMap(() =>
        this.todoService.getTodos().pipe(
          map(todos => TodoActions.loadTodosSuccess({ todos })),
          catchError(error => of(TodoActions.loadTodosFailure({ error: error.message })))
        )
      )
    )
  );

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.createTodo),
      mergeMap(action =>
        this.todoService.createTodo(action.todo).pipe(
          map(todo => TodoActions.createTodoSuccess({ todo })),
          catchError(error => of(TodoActions.createTodoFailure({ error: error.message })))
        )
      )
    )
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.updateTodo),
      mergeMap(action =>
        this.todoService.updateTodo(action.id, action.updates).pipe(
          map(todo => TodoActions.updateTodoSuccess({ todo })),
          catchError(error => of(TodoActions.updateTodoFailure({ error: error.message })))
        )
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.deleteTodo),
      mergeMap(action =>
        this.todoService.deleteTodo(action.id).pipe(
          map(() => TodoActions.deleteTodoSuccess({ id: action.id })),
          catchError(error => of(TodoActions.deleteTodoFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}
}