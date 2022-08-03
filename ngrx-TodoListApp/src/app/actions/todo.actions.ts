import { createAction, props } from '@ngrx/store';
import { Todo } from '../core/models/todo';

export const initTodos = createAction('[TodoList] INIT_TODOS');
export const initTodosSuccess = createAction('[TodoList] INIT_TODOS_SUCCESS',props<{todos:Todo[]}>());
export const deleteTodo = createAction('[TodoList] DELETE_TODO',props<{todo:Todo}>());

