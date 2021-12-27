import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BaseComponent } from '@app/shared/base.component';
import { Node } from '@app/core/models';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent extends BaseComponent implements OnInit {

  @Input() rootNode: Node;
  nodeForm: FormGroup;
  optionHandler: {
    [key: string]: string
  } = {};

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.nodeForm = this.fb.group({
      name: ['', [Validators.required]],
      type: ['folder']
    });
  }

  //shows add folder and file buttons
  onShowOption(nodeId: string): void {
    this.optionHandler = {};
    this.reset();
    this.optionHandler[nodeId] = 'action';
  }

  //opens form to add node
  onAddNode(type: string, nodeId: string): void {
    let nodeType = type;
    if (type !== 'folder' && type !== 'file')
      nodeType = 'unset';
    this.nodeForm.get('type').setValue(nodeType);
    this.optionHandler[nodeId] = 'form';

  }

  //on form submit
  onSubmit(node: Node): void {
    const nodeName = this.nodeForm.get('name').value.trim();
    if (nodeName) {
      const data: Node = {
        id: this.getUniqueId(),
        type: this.nodeForm.get('type').value,
        name: nodeName,
        children: []
      };
      node.children?.push(data);
      this.nodeForm.get('name').setValue('');
      this.optionHandler[node.id] = null;
    }
  }

  //generates unique id for new node
  getUniqueId(): string {
    const stringArr = [];
    for (let i = 0; i < 4; i++) {
      const str = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(str);
    }
    return stringArr.join('-');
  }

  //removes file or folder from rootNode
  remove(parent: Node, nodeId: string): void {
    const index = parent?.children?.findIndex((x) => x.id === nodeId);
    if (index > -1) {
      parent.children.splice(index, 1);
    }
  }

  //resets the text field
  reset(): void {
    this.nodeForm.get('name').setValue('');
  }

}
