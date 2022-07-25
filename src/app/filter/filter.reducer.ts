import { createReducer, on } from '@ngrx/store';
import { addFilter } from './filter.actions';
import { ValidFiltersType } from './filter.type';

export const initialState: ValidFiltersType = 'all';

export const filterReducer = createReducer<ValidFiltersType>(
   initialState,
   on(addFilter, (_state, {filtro}) => filtro)

);