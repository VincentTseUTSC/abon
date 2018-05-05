import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TestComponent } from './test/test.component';
import { VTestComponent } from './v-test/v-test.component';
import { MoldComponent } from './mold/mold.component';
import { AssemblyComponent } from './assembly/assembly.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'mold',
    component: MoldComponent
  },
  {
    path: 'assembly',
    component: AssemblyComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'v-test',
    component: VTestComponent
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
