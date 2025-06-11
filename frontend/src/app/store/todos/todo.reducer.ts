import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import * as TodoActions from './todo.actions';

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

export const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadTodos, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos,
    loading: false,
    error: null,
  })),
  on(TodoActions.loadTodosFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(TodoActions.createTodo, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TodoActions.createTodoSuccess, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
    loading: false,
    error: null,
  })),
  on(TodoActions.createTodoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(TodoActions.updateTodo, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TodoActions.updateTodoSuccess, (state, { todo }) => ({
    ...state,
    todos: state.todos.map(t => t.id === todo.id ? todo : t),
    loading: false,
    error: null,
  })),
  on(TodoActions.updateTodoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(TodoActions.deleteTodo, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TodoActions.deleteTodoSuccess, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(t => t.id !== id),
    loading: false,
    error: null,
  })),
  on(TodoActions.deleteTodoFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(TodoActions.clearTodoError, state => ({
    ...state,
    error: null,
  }))
);