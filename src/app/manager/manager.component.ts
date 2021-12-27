import { Component, OnInit, ViewChild } from '@angular/core';

import { BaseComponent } from '@app/shared/base.component';
import { Node } from '@app/core/models';

import { NodeComponent } from './node/node.component';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent extends BaseComponent implements OnInit {

  @ViewChild(NodeComponent, { static: false }) node: NodeComponent;
  rootNode: Node = {
    id: '',
    name: '',
    type: 'folder',
    children: []
  };
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  addRootNode() {
    this.node.onAddNode('folder', this.rootNode.id);
  }

}
