import { ActionReducerMap } from "@ngrx/store";

import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";
import { ValidFiltersType } from "./filter/filter.type";
import { filterReducer } from "./filter/filter.reducer";


export interface AppState {
    todos: Todo[],
    filtro: ValidFiltersType
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filterReducer

}