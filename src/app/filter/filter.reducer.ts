import { createReducer, on } from '@ngrx/store';
import { setFilter } from './filter.actions';
import { ValidFiltersType } from './filter.type';

export const initialState: ValidFiltersType = 'all';

export const filterReducer = createReducer<ValidFiltersType>(
   initialState,
   on(setFilter, (_state, {filtro}) => filtro)

);