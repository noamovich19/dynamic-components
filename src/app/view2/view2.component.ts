import {Component, OnInit} from '@angular/core';
import {BaseDynamicComponent} from "../BaseDynamicComponent";
import {ButtonClickEvent} from "../events";
import {Router} from "@angular/router";


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

  constructor() {

    super()
  }

  ngOnInit() {
    this.data = <Compponent1Data> this.context;
    console.log(this.data.name)
  }


  onClick() {
    this.eventEmitter.emit(new ButtonClickEvent("button click!!"))
  }
}
