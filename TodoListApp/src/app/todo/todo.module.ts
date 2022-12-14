import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoFormComponent,
    TodoReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[TodoListComponent,TodoFormComponent,TodoReactiveFormComponent]
})
export class TodoModule { }
