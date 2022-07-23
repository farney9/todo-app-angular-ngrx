import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-state.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @ViewChild('inputEdit') txtInputEdit!: ElementRef;

  @Input() item: Todo = new Todo('');
  chkCompletedField!: FormControl;
  taskField!: FormControl;
  isTaskFieldEdit: boolean = false; 

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.item = {
      ...this.item,
    }

    this.chkCompletedField = new FormControl( this.item.isCompleted);
    this.taskField = new FormControl( this.item.name, Validators.required);
    this.chkCompletedField.valueChanges.subscribe( () => {
      this.store.dispatch(actions.toogleCompleted({id: this.item.id}))
    })
  }

  edit() {
    this.isTaskFieldEdit = true;
    this.taskField.setValue(this.item.name);

    setTimeout(() => {
      this.txtInputEdit.nativeElement.select();
    },1)
  }

  onFinishEdit() {
    this.isTaskFieldEdit = false;

    if (this.taskField.invalid) { return; }
    if (this.taskField.value === this.item.name) { return; }

    this.store.dispatch(actions.edit({id: this.item.id, texto: this.taskField.value}));
  }

  onDelete() {
    this.store.dispatch(actions.deleteTodo({id: this.item.id}));
  }
}
