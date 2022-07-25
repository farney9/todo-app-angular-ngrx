import { createAction, props } from '@ngrx/store';
import { ValidFiltersType } from './filter.type';



export const setFilter = createAction(
   '[FILTER] Set Filter',
    props<{ filtro: ValidFiltersType }>()
);





