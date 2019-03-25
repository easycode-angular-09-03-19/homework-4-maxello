import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() task: Task;
  @Output() outputTask: EventEmitter<Task> = new EventEmitter<Task>();
  constructor() { }

  ngOnInit() {
  }

  removeTask(){
    confirm("Are you sure?") ? this.outputTask.emit(this.task) : null;
  }

  completeTask(){
    this.task.completed = true;
  } 

}
