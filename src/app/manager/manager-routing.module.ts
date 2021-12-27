import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerComponent } from './manager.component';
import { NodeComponent } from './node/node.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      {
        path: 'node',
        component: NodeComponent
      },
      {
        path: '**',
        redirectTo: 'manager/node'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
