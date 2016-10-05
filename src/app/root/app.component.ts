import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'app-root',
  template: `
    <ons-page>
      <ons-toolbar>
          <div class="center">{{title}}</div>
      </ons-toolbar>

      <div style="text-align: center;">
          <p>Hello World!</p>
         <!-- <ons-button (click)="alertPopup()">Click Me!</ons-button> -->
      </div>
      <nav class="navbar navbar-light bg-faded">
      <ul class="nav navbar-nav">
        <li class="nav-item" routerLinkActive="active">
          <a class="nav-link" [routerLink]="['/page1']">Counter</a>
        </li>
      </ul>
    </nav>
    <hr />
    <router-outlet></router-outlet>
    </ons-page>     
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Onsen UI';
}