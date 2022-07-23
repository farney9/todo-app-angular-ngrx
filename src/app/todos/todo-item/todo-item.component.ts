import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';

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

  constructor() { }

  ngOnInit(): void {
    this.item = {
      ...this.item,
    }
    this.item.isCompleted = true;
    this.chkCompletedField = new FormControl( this.item.isCompleted);
    this.taskField = new FormControl( this.item.name, Validators.required);
  }

  edit() {
    this.isTaskFieldEdit = true;

    setTimeout(() => {
      this.txtInputEdit.nativeElement.select();
    },1)
  }
  onFinishEdit() {
    this.isTaskFieldEdit = false;
  }
}
