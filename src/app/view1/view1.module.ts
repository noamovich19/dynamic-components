import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View1Component } from './view1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [View1Component],
  exports: [View1Component]
})
export class View1Module { }
