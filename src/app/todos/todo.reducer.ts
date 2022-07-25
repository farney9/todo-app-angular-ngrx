import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { add, cleanCompleted, deleteTodo, edit, toggleAll, toogleCompleted } from './todo.actions';

export const initialState: Todo[] = [ 
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje Iron Man'),
  new Todo('Robar escudo capitán América'),
];

export const todoReducer = createReducer(
    initialState,
    on(add, (state, { texto }) => [... state, new Todo(texto) ]),

    on(cleanCompleted, (state) => state.filter( data =>  !data.isCompleted)),
    
    on(deleteTodo, (state, { id }) => state.filter( data => data.id !== id)),

    on(toggleAll, (state, {completado}) => state.map(data => { 

      return { ...data, isCompleted: completado };
    })),

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