import { Component, OnInit } from '@angular/core';
import { ActionType } from 'src/app/core/action-types';
import { Todo } from 'src/app/core/models/todo';
import { MessageBusService } from 'src/app/core/services/message-bus.service';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {


  todoModel:Todo = {
    title:"",
    completed:false
  }


  constructor( private messageBus:MessageBusService) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.todoModel);
    this.messageBus.dispatch({type:ActionType.NEW_TODO,payload:this.todoModel})
  }

}
