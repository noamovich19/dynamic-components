import {Subject} from "rxjs";

export class ComponentsEvents {
  public static buttonClicked: Subject < any > = new Subject();
}
