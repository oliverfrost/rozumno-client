import {Component, Input, OnInit} from '@angular/core';
import {ToDo} from '../../models/todo';

@Component({
  selector: 'app-to-do-item',
  template: `
    <mat-card class="card">
      <mat-checkbox [value]="todo.checked">{{todo.name}}</mat-checkbox>
      <button class="card__trash-bin" mat-button>
        <i class="material-icons">delete</i>
      </button>
    </mat-card>
  `,
  styles: [
      `
      .card {
        margin: auto;
        margin-bottom: 25px;
        width: 500px;
      }

      .card__trash-bin {
        float: right;
      }
    `
  ]
})

export class ToDoItemComponent implements OnInit {
  @Input() todo: ToDo;

  constructor() {
  }

  ngOnInit() {
  }
}
