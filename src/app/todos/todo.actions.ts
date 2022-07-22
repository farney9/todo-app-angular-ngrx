import { createAction, props } from '@ngrx/store';


export const add = createAction(
    '[TODO] Crear Todo',
    props<{ texto: string }>()
);