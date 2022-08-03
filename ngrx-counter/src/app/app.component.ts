import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, incrementBy, reset } from './counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-counter';
  count$!: Observable<{value:number}>;

  constructor(private store: Store<{ count: {value:number} }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }
  incrementBy12() {
    const i = {incValue:12}
    this.store.dispatch(incrementBy(i));
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
