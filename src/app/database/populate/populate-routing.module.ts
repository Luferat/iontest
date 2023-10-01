import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopulatePage } from './populate.page';

const routes: Routes = [
  {
    path: '',
    component: PopulatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopulatePageRoutingModule {}
