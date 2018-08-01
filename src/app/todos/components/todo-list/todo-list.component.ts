import {Component} from '@angular/core';
import {ToDo} from '../../models/todo';


@Component({
  selector: 'app-to-do-list',
  template: `
    <app-to-do-item *ngFor="let todo of todos" [todo]="todo"></app-to-do-item>
  `
})
export class ToDoListComponent {
  public todos: ToDo[] = [
    {
      name: 'Buy Milk',
      checked: false
    },
    {
      name: 'Learn NgRx Effects',
      checked: false
    },
    {
      name: 'Learn NgRx Store',
      checked: false
    },
  ];
}
