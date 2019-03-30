import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  tasks: Task[] = [
    {
      id: 1,
      text: "Выбить ковер",
      completed: false
    },
    {
      id: 2, 
      text: "Почистить форсунки", 
      completed: true 
    },
    {
      id: 3, 
      text: "Выгулять собаку", 
      completed: false 
    },
    {
      id: 4,
      text: "Приготовить ужин", 
      completed: false 
    },
    {
      id: 5,
      text: "Купить диван", 
      completed: true 
    }
  ];
  currentId: number = this.tasks.length ? this.tasks[this.tasks.length - 1].id : 1;
  
  constructor() { }

  ngOnInit() {  
  }

  onRemoveTask(item: Task) {
    this.tasks.splice(this.tasks.indexOf(item), 1);
  }

  completeAllTasks() {
    this.tasks.forEach((item: Task): void => {
      item.completed = true;
    });
  }

  onAddTask(task: Task) {
    this.tasks.push(task);
  }
}
