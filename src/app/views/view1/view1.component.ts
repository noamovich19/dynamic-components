import {Component, OnInit} from '@angular/core';
import {BaseDynamicComponent} from '../../dynamic/BaseDynamicComponent';
import {ComponentsEvents} from '../../dynamic/ComponenetsEvents';
import {Http} from '@angular/http';
import {MyServiceService} from '../../dynamic/my-service.service';


class Compponent1Data {
  showNum: number;
}


@Component({
  templateUrl: 'view1.component.html',
  styleUrls: ['view1.component.css']
})
export class View1Component extends BaseDynamicComponent implements OnInit {

  text = 'blblb';
  data;

  constructor(http: Http, a: MyServiceService) {
    super();
    http.get('http://google.com');
  }

  ngOnInit() {
    ComponentsEvents.buttonClicked.subscribe(value => {
      this.text = value;
    });
    this.data = <Compponent1Data> this.context;
    console.log(this.data.showNum);
  }
}
