import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { deleteTodo, initTodos, initTodosSuccess } from '../actions/todo.actions';
import { TodoService } from '../core/services/todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoEffectService {

  constructor(private actions$: Actions,private todoService:TodoService) { }

  loadTodos$ = createEffect(
    ()=>this.actions$.pipe(
      ofType(initTodos),
      switchMap( ()=> this.todoService.findAll()),
      map(todos => initTodosSuccess({todos}))
      )
  );

  deleteTodo$ = createEffect(
    ()=>this.actions$.pipe(
      ofType(deleteTodo),
      switchMap( (action)=> this.todoService.delete(action.todo)),
      map(() => initTodos())
    )
  );

}
