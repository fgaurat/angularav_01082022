import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  readonly httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
  }

  constructor(private http:HttpClient) { }

  findAll():Observable<Todo[]>{
    return this.http.get<Todo[]>(environment.url_todos);
  }

  delete(todo:Todo):Observable<void>{
    const url = `${environment.url_todos}/${todo.id}`;
    return this.http.delete<void>(url);
  }

  save(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(environment.url_todos,todo,this.httpOptions);
  }

}
