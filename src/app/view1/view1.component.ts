import { Component, OnInit } from '@angular/core';
import {BaseDynamicComponent} from "../BaseDynamicComponent";
import {ComponentsEvents} from "../ComponenetsEvents";


class Compponent1Data {
  showNum: number
}


@Component({
  selector: 'view1',
  templateUrl: 'view1.component.html',
  styleUrls: ['view1.component.css']
})
export class View1Component extends BaseDynamicComponent implements OnInit  {

  text = ""
  data
  constructor() {
    super()
  }

  ngOnInit() {
    ComponentsEvents.buttonClicked.subscribe(value => {
      this.text = value;
    });
    this.data = <Compponent1Data> this.context;
    console.log(  this.data.showNum)
  }


}
