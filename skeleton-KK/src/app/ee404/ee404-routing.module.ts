import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ee404Page } from './ee404.page';

const routes: Routes = [
  {
    path: '',
    component: Ee404Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ee404PageRoutingModule {}
