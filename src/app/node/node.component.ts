import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {NodeViewsService} from './node-views.service';

@Component({
  selector: 'app-node',
  templateUrl: 'node.component.html',
  styleUrls: ['node.component.css'],
  providers: [NodeViewsService]
})
export class NodeComponent implements OnInit {
  componentList = [];
  node_id = null;


  constructor(private activatedRoute: ActivatedRoute, private nodeViewsService: NodeViewsService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.node_id = params['id'];
      this.nodeViewsService.get(this.node_id).subscribe(views => {
        this.componentList = views;
      });
    });
  }
}
