import {ToDo} from './todo';
import {ToDoActionsUnion, TodoActionTypes} from './todo.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export interface State extends EntityState<ToDo> {
  todos: ToDo[];
}

export const adapter: EntityAdapter<ToDo> = createEntityAdapter<ToDo>({});

export const initialState: State = adapter.getInitialState({
  todos: []
});

export function reducer(state = initialState, action: ToDoActionsUnion): State {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO:
      return null;
    case TodoActionTypes.DELETE_TODO:
      return null;
    case TodoActionTypes.TOGGLE_TODO:
      return null;
    default:
      return state;
  }
}

