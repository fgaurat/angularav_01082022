import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteTodo, initTodos } from 'src/app/actions/todo.actions';
import { Todo } from 'src/app/core/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  displayedColumns = ['id','title','completed','actions']

  todos$: Observable<Todo[]>;


  constructor(private store: Store<{ todos: Todo[] }>) {
    // this.todos$ = store.select('todos');
    this.todos$ = store.select(store=>store.todos);
  }

  ngOnInit(): void {
    this.store.dispatch(initTodos())
  }

  delete(todo:Todo){

    this.store.dispatch(deleteTodo({todo}))
  }

}
