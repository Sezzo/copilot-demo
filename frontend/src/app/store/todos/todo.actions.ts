import { createAction, props } from '@ngrx/store';
import { Todo, CreateTodoDto, UpdateTodoDto } from '../../models/todo.model';

export const loadTodos = createAction('[Todo] Load Todos');
export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ todos: Todo[] }>()
);
export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: string }>()
);

export const createTodo = createAction(
  '[Todo] Create Todo',
  props<{ todo: CreateTodoDto }>()
);
export const createTodoSuccess = createAction(
  '[Todo] Create Todo Success',
  props<{ todo: Todo }>()
);
export const createTodoFailure = createAction(
  '[Todo] Create Todo Failure',
  props<{ error: string }>()
);

export const updateTodo = createAction(
  '[Todo] Update Todo',
  props<{ id: string; updates: UpdateTodoDto }>()
);
export const updateTodoSuccess = createAction(
  '[Todo] Update Todo Success',
  props<{ todo: Todo }>()
);
export const updateTodoFailure = createAction(
  '[Todo] Update Todo Failure',
  props<{ error: string }>()
);

export const deleteTodo = createAction(
  '[Todo] Delete Todo',
  props<{ id: string }>()
);
export const deleteTodoSuccess = createAction(
  '[Todo] Delete Todo Success',
  props<{ id: string }>()
);
export const deleteTodoFailure = createAction(
  '[Todo] Delete Todo Failure',
  props<{ error: string }>()
);

export const clearTodoError = createAction('[Todo] Clear Error');