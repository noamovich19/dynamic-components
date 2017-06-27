import {Component} from '@angular/core';
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {ROUTER_PROVIDERS} from "@angular/router/src/router_module";

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Lets dynamically create some components!!</h2>
       <dynamic-component
          *ngFor="let componentData of componentList" [componentData]="componentData">
   </dynamic-component>
    </div>
  `,
  providers:[]
})
export class AppComponent {
  componentList = [];

  constructor() {
    this.componentList = [
      {component: "view1", inputs: {showNum: 9}},
      {component: "view1", inputs: {showNum: 1313}},
      {component: "view2", inputs: {name: "hello"}},
      {component: "view2", inputs: {name: "world"}},
      {component: "view2", inputs: {name: "world!!"}},
    ]

  }
}
