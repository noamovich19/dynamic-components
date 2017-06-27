import { Component, OnInit } from '@angular/core';
import {BaseDynamicComponent} from "../BaseDynamicComponent";
import {ComponentsEvents} from "../ComponenetsEvents";
import {Http} from "@angular/http";
import {MyServiceService} from "../my-service.service";


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
  constructor(http : Http ,a: MyServiceService) {
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
