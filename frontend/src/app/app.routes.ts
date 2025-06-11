import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { TodoList } from './components/todo-list/todo-list';
import { Calendar } from './components/calendar/calendar';
import { MoodTracker } from './components/mood-tracker/mood-tracker';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'todos', component: TodoList },
  { path: 'calendar', component: Calendar },
  { path: 'mood', component: MoodTracker },
];
