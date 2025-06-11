import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { selectTodosStats } from '../../store/todos/todo.selectors';
import { loadTodos } from '../../store/todos/todo.actions';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  todosStats$: Observable<any>;
  currentDate = new Date();

  constructor(private store: Store) {
    this.todosStats$ = this.store.select(selectTodosStats);
  }

  ngOnInit() {
    this.store.dispatch(loadTodos());
  }

  get greeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  }
}
