import { createAction, props } from '@ngrx/store';

export const add = createAction(
    '[TODO] Crear Todo',
    props<{ texto: string }>()
);

export const edit = createAction(
    '[TODO] Editar Todo',
    props<{ id: number, texto: string }>()
);

export const toogleCompleted = createAction(
    '[TODO] Toggle Completed',
    props<{ id: number }>()
);


export const deleteTodo = createAction(
    '[TODO] Delete Todo',
    props<{ id: number }>()
);
export const toggleAll = createAction(
    '[TODO] Toggle All Todos',
    props<{ completado: boolean }>()
);

export const cleanCompleted = createAction( '[FILTER] Clean Completed Tasks');
 