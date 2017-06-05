import {Component, OnInit} from '@angular/core';
import {BaseDynamicComponent} from "../BaseDynamicComponent";


class Compponent1Data {
  name: string
}


@Component({
  selector: 'view2',
  templateUrl: 'view2.component.html',
  styleUrls: ['view2.component.css']
})
export class View2Component extends BaseDynamicComponent implements OnInit {

  data

  constructor() {
    super()
  }

  ngOnInit() {
    this.data = <Compponent1Data> this.context;
    console.log(this.data.name)
  }

  onEvent(enent: any) {

  }

  onClick() {
    this.eventEmitter.emit({type: "click", "data": "button was clicked!"})
  }


}
