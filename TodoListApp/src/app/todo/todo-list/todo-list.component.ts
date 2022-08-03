import { AfterViewInit, Component, OnInit } from '@angular/core';
import { merge, Observable, switchMap } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { ActionType } from 'src/app/core/action-types';
import { Action } from 'src/app/core/models/action';
import { Todo } from 'src/app/core/models/todo';
import { MessageBusService } from 'src/app/core/services/message-bus.service';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit,AfterViewInit {


  todos$!: Observable<Todo[]>
  displayedColumns = ['id','title','completed','actions']
  constructor(private todoService:TodoService,private messageBus:MessageBusService) { }

  ngAfterViewInit(): void {
    this.messageBus.dispatch({type:ActionType.INIT_TODOS})
  }

  ngOnInit(): void {

    const initTodos$ = this.messageBus.bus$.pipe(
      filter( (action:Action) => action.type == ActionType.INIT_TODOS)
    )
    const newTodo$ = this.messageBus.bus$.pipe(
      filter( (action:Action) => action.type == ActionType.NEW_TODO),
      switchMap((action:Action) => this.todoService.save(action.payload))
    )

    const deleteTodo$ = this.messageBus.bus$.pipe(
      filter( (action:Action) => action.type == ActionType.DELETE_TODO),
      tap((action:Action) => console.log(action)),
      switchMap((action:Action) => this.todoService.delete(action.payload))
    )

    this.todos$ =merge(initTodos$,newTodo$,deleteTodo$).pipe(switchMap(() => this.todoService.findAll()))
  }


  delete(todo:Todo){
    // this.todos$ = this.todoService.delete(todo).pipe(
    //   switchMap( () => this.todoService.findAll())
    // )

    this.messageBus.dispatch({type:ActionType.DELETE_TODO,payload:todo})
  }



}
