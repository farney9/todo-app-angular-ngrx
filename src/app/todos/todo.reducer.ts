import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { add, deleteTodo, edit, toogleCompleted } from './todo.actions';

export const initialState: Todo[] = [ 
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje Iron Man'),
  new Todo('Robar escudo capitán América'),
];

export const todoReducer = createReducer(
    initialState,
    on(add, (state, { texto }) => [... state, new Todo(texto) ]),
    
    on(deleteTodo, (state, { id }) => state.filter( data => data.id !== id)),

    on(toogleCompleted, (state, { id }) => {
      return state.map((data) => {
        
        if (data.id === id) {
          return{ ...data, isCompleted: !data.isCompleted };
        } else {
          return data
        }
      })
    }),

    on(edit, (state, { id, texto }) => {
      return state.map((data) => {
        
        if (data.id === id) {
          return{ ...data, name: texto};
        } else {
          return data
        }
      })
    }),
  );