import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadonePage } from './readone.page';

const routes: Routes = [
  {
    path: '',
    component: ReadonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadonePageRoutingModule {}
