import { Component, OnInit } from '@angular/core';
import {BaseDynamicComponent} from "../BaseDynamicComponent";
import {ButtonClickEvent, OnButtonClickListener} from "../events";


class Compponent1Data {
  showNum: number
}


@Component({
  selector: 'view1',
  templateUrl: 'view1.component.html',
  styleUrls: ['view1.component.css']
})
export class View1Component extends BaseDynamicComponent implements OnInit , OnButtonClickListener {

  text = ""
  data
  constructor() {
    super()
  }

  ngOnInit() {
    this.data = <Compponent1Data> this.context;
    console.log(  this.data.showNum)
  }

  onButtonClick(event: ButtonClickEvent){
    console.log(event.text)
    console.log("got event!: " + event.text)
    this.text = event.text;
  }

}
