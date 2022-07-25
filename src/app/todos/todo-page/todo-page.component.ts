import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-state.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  isCkeckedAll: boolean = false;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll() {
    this.isCkeckedAll = !this.isCkeckedAll;
    console.log(this.isCkeckedAll);
    this.store.dispatch(actions.toggleAll({completado: this.isCkeckedAll}));
    
  }

}
