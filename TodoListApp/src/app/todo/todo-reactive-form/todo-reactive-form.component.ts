import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActionType } from 'src/app/core/action-types';
import { MessageBusService } from 'src/app/core/services/message-bus.service';

@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent implements OnInit {


  todoForm = this.fb.group({
    title:['',Validators.required],
    completed:[false],

  });


  constructor(private fb:FormBuilder, private messageBus:MessageBusService) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.todoForm.value);
    this.messageBus.dispatch({type:ActionType.NEW_TODO,payload:this.todoForm.value})
  }
}
