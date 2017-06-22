import {Output, EventEmitter} from "@angular/core";




export abstract class BaseDynamicComponent {
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter<any>();
  context: any;
}
