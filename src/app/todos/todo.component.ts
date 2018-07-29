import {Component} from '@angular/core';
import {ToDo} from './todo';


@Component({
  selector: 'app-to-dos',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css']
})
export class ToDosComponent {
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
