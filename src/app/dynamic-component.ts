import {
  Component, Input, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver,
  Output, EventEmitter
} from '@angular/core';
import {View1Component} from "./view1/view1.component";
import {BaseDynamicComponent} from "./BaseDynamicComponent";
import {View2Component} from "./view2/view2.component";
import {Subject} from "rxjs";


@Component({
  selector: 'dynamic-component',
  entryComponents: [View1Component , View2Component],
  template: `  
    <div #dynamicComponentContainer></div>
  `,
})
export default class DynamicComponent {

  currentComponent = null;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

  @Input() set componentData(data: {component: any, inputs: any }) {
    if (!data) {
      return;
    }


    let injector = ReflectiveInjector.fromResolvedProviders([]);
    let factory = this.resolver.resolveComponentFactory(this.getComponent(data.component))

    let component = factory.create(injector);
    let instance = <BaseDynamicComponent> component.instance;
    instance.context = data.inputs;

    this.dynamicComponentContainer.insert(component.hostView);

    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = component;
  }

  getComponent(componentName : string) {
    let componentNameToComponent = {
      "view1": View1Component,
      "view2": View2Component,
    }
    return componentNameToComponent[componentName];
  }




  constructor(private resolver: ComponentFactoryResolver) {

  }
}
