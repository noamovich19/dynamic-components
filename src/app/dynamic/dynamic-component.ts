import {
  Component, Input, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver
} from '@angular/core';
import {View1Component} from "../views/view1/view1.component";
import {BaseDynamicComponent} from "./BaseDynamicComponent";
import {View2Component} from "../views/view2/view2.component";
import {ComponentFactory} from "./ComponentFactory";


@Component({
  selector: 'dynamic-component',
  entryComponents: [ComponentFactory.getAllComponents()],
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

    const injector = ReflectiveInjector.resolveAndCreate(ComponentFactory.getProviders(data.component));
    const factory = this.resolver.resolveComponentFactory(ComponentFactory.getComponent(data.component));

    const component = factory.create(injector);
    const instance = <BaseDynamicComponent> component.instance;
    instance.context = data.inputs;

    this.dynamicComponentContainer.insert(component.hostView);

    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = component;
  }



  constructor(private resolver: ComponentFactoryResolver) {

  }
}
