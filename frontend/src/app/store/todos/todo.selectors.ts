import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

export const selectTodoState = createFeatureSelector<TodoState>('todos');

export const selectAllTodos = createSelector(
  selectTodoState,
  state => state.todos
);

export const selectTodosLoading = createSelector(
  selectTodoState,
  state => state.loading
);

export const selectTodosError = createSelector(
  selectTodoState,
  state => state.error
);

export const selectCompletedTodos = createSelector(
  selectAllTodos,
  todos => todos.filter(todo => todo.completed)
);

export const selectPendingTodos = createSelector(
  selectAllTodos,
  todos => todos.filter(todo => !todo.completed)
);

export const selectTodosByPriority = createSelector(
  selectAllTodos,
  todos => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return todos.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
  }
);

export const selectTodosStats = createSelector(
  selectAllTodos,
  todos => ({
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    pending: todos.filter(t => !t.completed).length,
    highPriority: todos.filter(t => t.priority === 'high' && !t.completed).length,
  })
);