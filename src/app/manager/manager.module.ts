import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { NodeComponent } from './node/node.component';

@NgModule({
  declarations: [ManagerComponent, NodeComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule
  ]
})
export class ManagerModule { }
