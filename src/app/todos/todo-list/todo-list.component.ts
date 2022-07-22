import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app-state.reducer';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: Todo[] = [];

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    /**
     * Cada vez que se reciba un cambio voy a esdtar suscrito y se va actualizar mi priopiedad `this.items`
     */
    this.store.select('todos')
      .subscribe( todos => this.items = todos)
  }

}
