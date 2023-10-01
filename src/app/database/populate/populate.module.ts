import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopulatePageRoutingModule } from './populate-routing.module';

import { PopulatePage } from './populate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopulatePageRoutingModule
  ],
  declarations: [PopulatePage]
})
export class PopulatePageModule {}
