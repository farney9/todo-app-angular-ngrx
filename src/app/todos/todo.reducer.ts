import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { add } from './todo.actions';

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
    initialState,
    on(add, (state, { texto }) => [... state, new Todo(texto) ]),
  );