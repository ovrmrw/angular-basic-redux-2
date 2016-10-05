import { Component, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Page1Service } from './page1.service';
// import { Store } from '../store';


@Component({
  selector: 'app-page1',
  template: `
    {{(state | async).counter}}
    <button (click)="increment()">+</button>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class Page1Component implements OnInit, OnChanges {
  state: Observable<any>;

  constructor(
    private service: Page1Service,
    // private store: Store,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.data.take(1).subscribe((data: { state: any }) => {
      console.log('ngOnInit:', data);
      this.state = data.state;
    });
  }

  ngOnChanges(change) {
    this.route.data.subscribe(data => {
      console.log('ngOnChanges:', data);
    });
  }


  increment() { this.service.increment(); }


  // get state() { return Observable.merge(this.route.data.map(s => s['state'])); }

}
