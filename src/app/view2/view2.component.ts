import {Component, OnInit} from '@angular/core';
import {BaseDynamicComponent} from "../BaseDynamicComponent";
import {ComponentsEvents} from "../ComponenetsEvents";
import {MyServiceService2} from "../my-service.service";


class Compponent1Data {
  name: string
}


@Component({
  selector: 'view2',
  templateUrl: 'view2.component.html',
  styleUrls: ['view2.component.css'],
  providers: []
})
export class View2Component extends BaseDynamicComponent implements OnInit {

  data

  constructor(a : MyServiceService2) {

    super()
  }

  ngOnInit() {
    this.data = <Compponent1Data> this.context;
    console.log(this.data.name)
  }


  onClick() {
    ComponentsEvents.buttonClicked.next("view2 was clicked!")
  }
}
