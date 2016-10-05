import { NgModule } from '@angular/core';

import { Dispatcher } from './common';
import { Store } from './store';
import { StoreResolver } from './resolver';


@NgModule({
  providers: [Dispatcher, Store, StoreResolver],
})
export class StoreModule { }
