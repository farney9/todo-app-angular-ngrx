import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-state.reducer';
import * as actions from '../../filter/filter.actions';
import { ValidFiltersType } from '../../filter/filter.type';
import { cleanCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: ValidFiltersType = 'all';
  filters: ValidFiltersType[] = ['completed', 'active', 'all'];
  pendingTask: number = 0;

  constructor( private store:Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filtro')
    //   .subscribe( filtro => this.actualFilter = filtro );

    this.store.subscribe( state => {
      this.actualFilter = state.filtro;
      this.pendingTask = state.todos.filter( todo => !todo.isCompleted).length;
    })

  }

  changeFilter(filterSelected: ValidFiltersType) {
    this.actualFilter = filterSelected;
    this.store.dispatch(actions.setFilter({filtro: this.actualFilter}));
    // console.log(this.actualFilter);

  }

  onCleanCompleted() {
    this.store.dispatch(cleanCompleted());

  }

}
