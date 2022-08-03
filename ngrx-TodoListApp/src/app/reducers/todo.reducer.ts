import { createReducer, on } from '@ngrx/store';
import { initTodosSuccess } from '../actions/todo.actions';
import { Todo } from '../core/models/todo';




export const initialState:Todo[] = [
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
]


export const todoReducer = createReducer(
  initialState,

  on(initTodosSuccess, (state,action)=>action.todos)


);
