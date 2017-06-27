import {
  Component, Input, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver
} from '@angular/core';
import {View1Component} from "./view1/view1.component";
import {BaseDynamicComponent} from "./BaseDynamicComponent";
import {View2Component} from "./view2/view2.component";
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

    let injector = ReflectiveInjector.resolveAndCreate(ComponentFactory.getProviders(data.component));
    let factory = this.resolver.resolveComponentFactory(ComponentFactory.getComponent(data.component));

    let component = factory.create(injector);
    let instance = <BaseDynamicComponent> component.instance;
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
