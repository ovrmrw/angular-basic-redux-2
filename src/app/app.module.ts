import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OnsenModule } from 'angular2-onsenui';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from './store';

import { AppComponent } from './root/app.component';
import { Page1Component } from './page1/page1.component';

import { Page1Service } from './page1/page1.service';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule, StoreModule, OnsenModule],
  declarations: [AppComponent, Page1Component],
  providers: [Page1Service],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
