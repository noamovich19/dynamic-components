import {Component} from '@angular/core';
import HelloWorldComponent from "./hello-world-component";
import WorldHelloComponent from "./world-hello-component";

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Lets dynamically create some components!</h2>
      <button (click)="createHelloWorldComponent()">Create Hello World</button>
      <button (click)="createWorldHelloComponent()">Create World Hello</button>
      <dynamic-component [componentData]="componentData"></dynamic-component>
    </div>
  `,

})
export class AppComponent {
  componentData = null;

  createHelloWorldComponent() {
    this.componentData = {
      component: HelloWorldComponent,
      inputs: {
        showNum: 9
      }
    };
  }

  createWorldHelloComponent() {
    this.componentData = {
      component: WorldHelloComponent,
      inputs: {
        showNum: 2
      }
    };
  }
}
