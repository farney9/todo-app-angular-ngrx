import { Pipe, PipeTransform } from '@angular/core';
import { ValidFiltersType } from '../filter/filter.type';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: ValidFiltersType): Todo[] {
    
    console.log(filtro);
    
    switch (filtro) {
      case 'completed':
        return todos.filter(data => data.isCompleted);
    
      case 'active':
        return todos.filter(data => !data.isCompleted);
        
        default:
          return todos;
    }
  }

}
