import {Component, OnInit} from '@angular/core';
import {BaseDynamicComponent} from '../../dynamic/BaseDynamicComponent';
import {ComponentsEvents} from '../../dynamic/ComponenetsEvents';
import {MyServiceService2} from '../../dynamic/my-service.service';


class Compponent1Data {
  name: string;
}


@Component({
  templateUrl: 'view2.component.html',
  styleUrls: ['view2.component.css'],
  providers: []
})
export class View2Component extends BaseDynamicComponent implements OnInit {

  data;

  constructor(a: MyServiceService2) {

    super();
  }

  ngOnInit() {
    this.data = <Compponent1Data> this.context;
    console.log(this.data.name);
  }


  onClick() {
    ComponentsEvents.buttonClicked.next('view2 was clicked!');
  }
}
