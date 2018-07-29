import {Action} from '@ngrx/store';
import {ToDo} from './todo';

export enum TodoActionTypes {
  ADD_TODO = '[ToDo] Add Todo',
  DELETE_TODO = '[ToDo] Delete Todo',
  TOGGLE_TODO = '[ToDo] Toggle Todo'
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.ADD_TODO;

  constructor(public payload: ToDo) {
  }
}

export class DeleteTodo implements Action {
  readonly type = TodoActionTypes.DELETE_TODO;

  constructor(public payload: ToDo) {
  }
}

export class ToggleTodo implements Action {
  readonly type = TodoActionTypes.TOGGLE_TODO;

  constructor(public payload: ToDo) {
  }
}

export type ToDoActionsUnion =
  | AddTodo
  | DeleteTodo
  | ToggleTodo;
