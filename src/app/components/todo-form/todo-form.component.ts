import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { FormTask } from '../../interfaces/form-task.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() outputTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Input() lastId: number;
  formData: FormTask = {
    name: ""
  };

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    this.lastId += 1;
    this.outputTask.emit({
      id: this.lastId, 
      text: this.formData.name,
      completed: false
    });
  }

  onSubmit(form: any) {
    if(form.valid) {
      this.addTask();
      form.resetForm();
    }
  }
}
