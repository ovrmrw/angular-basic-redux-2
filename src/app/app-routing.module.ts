import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './page1/page1.component';
import { StoreResolver } from './store';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/page1',
    pathMatch: 'full'
  },
  // { path: 'page1', component: Page1Component },
  { path: 'page1', component: Page1Component, resolve: { resolver: StoreResolver } }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
