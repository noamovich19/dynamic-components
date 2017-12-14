import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View1Component } from './view1.component';
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [View1Component],
  exports: [View1Component],
  providers: []
})
export class View1Module { }
