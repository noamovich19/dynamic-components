import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import DynamicComponent from "./dynamic-component";
import {View1Module} from "./view1/view1.module";
import {View2Module} from "./view2/view2.module";

@NgModule({
  declarations: [AppComponent, DynamicComponent ],
  imports: [
    View1Module,
    View2Module,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
