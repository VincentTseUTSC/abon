import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { }
