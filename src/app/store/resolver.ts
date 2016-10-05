import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Store } from './store';


@Injectable()
export class StoreResolver implements Resolve<any> {
  constructor(
    private store: Store,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    route.data['state'] = this.store.getState();
    // return this.store.getState().take(1);
    return true;
  }
}
