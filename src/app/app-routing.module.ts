import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'manager',
    pathMatch: 'full'
  },
  {
    path: 'manager',
    loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule)
  },
  {
    path: '**',
    redirectTo: 'manager'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
