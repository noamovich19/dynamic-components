import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NodeViewsService {

  constructor() {
  }

  get(nodeId: string): Observable<any> {
    if (nodeId === '1') {
      return Observable.of([
        {component: 'view1', inputs: {showNum: 1313}},
        {component: 'view2', inputs: {name: 'hello'}},
        {component: 'view2', inputs: {name: 'world'}}]
      );
    }

    if (nodeId === '2') {
      return Observable.of([
        {component: 'view1', inputs: {showNum: 1313}},
        {component: 'view1', inputs: {showNum: 9666}},
        {component: 'view2', inputs: {name: 'hello'}},
        {component: 'view2', inputs: {name: 'world'}},
        {component: 'view2', inputs: {name: 'world1!!'}},
        {component: 'view2', inputs: {name: 'world2!!'}},
        {component: 'view2', inputs: {name: 'world3!!'}}]
      );
    }
    if (nodeId === '3') {
      return Observable.of([
        {component: 'view1', inputs: {showNum: 1313}},
        {component: 'view1', inputs: {showNum: 9666}},
        {component: 'view2', inputs: {name: 'node 3!!'}},
        {component: 'view2', inputs: {name: 'node 3'}},
        {component: 'view2', inputs: {name: 'youuuu'}},
        {component: 'view1', inputs: {showNum: 9666}},
        {component: 'view2', inputs: {name: 'world3!!'}}]
      );
    }

  }
}
