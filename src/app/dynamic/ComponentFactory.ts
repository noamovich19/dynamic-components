import {View1Component} from "../views/view1/view1.component";
import {View2Component} from "../views/view2/view2.component";
import {Http} from "@angular/http";
import {MyServiceService, MyServiceService2} from "./my-service.service";


export class ComponentFactory {


  public static componentData = {
    "view1": {
      "component": View1Component,
      "services": [MyServiceService]
    },
    "view2": {
      "component": View2Component,
      "services": [MyServiceService2]
    }
  }

  public static getComponent(componentName : string){
    return ComponentFactory.componentData[componentName]['component'];
  }

  public static getProviders(componentName : string){
    return ComponentFactory.componentData[componentName]['services'];
  }

  public static getAllComponents() {
    return Object.keys(ComponentFactory.componentData).map(componentName => {
      return ComponentFactory.componentData[componentName]['component']
    })
  }

  public static getAllServices() {
    const allServices = [];
    Object.keys(ComponentFactory.componentData).map(componentName => {
      ComponentFactory.componentData[componentName]['services'].map(service => {
        allServices.push(service);
      })
    });
    return allServices;
  }

}
