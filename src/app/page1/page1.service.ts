import { Injectable } from '@angular/core';

import { Dispatcher, Action, IncrementAction, TimeUpdateAction } from '../store';


@Injectable()
export class Page1Service {
  constructor(
    private dispatcher$: Dispatcher<Action>,
  ) { }


  increment() {
    setTimeout(() => {
      this.dispatcher$.next(new IncrementAction(1));
    }, 500);
  }
  
}