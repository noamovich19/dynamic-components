import {Component} from '@angular/core';
import {Subject} from "rxjs";


@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Lets dynamically create some components!</h2>
      <dynamic-component 
      *ngFor="let componentData of componentList" [componentData]="componentData"
      [notifyAllComponents]="eventSubject"
      >
      </dynamic-component>
    </div>
  `,

})
export class AppComponent {
  componentList = [];
  eventSubject: Subject<any> = new Subject();

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
