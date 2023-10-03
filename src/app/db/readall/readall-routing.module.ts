import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadallPage } from './readall.page';

const routes: Routes = [
  {
    path: '',
    component: ReadallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadallPageRoutingModule {}
