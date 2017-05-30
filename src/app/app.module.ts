import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import DynamicComponent from "./dynamic-component";
import WorldHelloComponent from "./world-hello-component";
import HelloWorldComponent from "./hello-world-component";

@NgModule({
  declarations: [AppComponent,
    HelloWorldComponent,
    WorldHelloComponent,
    DynamicComponent]
  ,
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
