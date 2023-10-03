import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadonePageRoutingModule } from './readone-routing.module';

import { ReadonePage } from './readone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadonePageRoutingModule
  ],
  declarations: [ReadonePage]
})
export class ReadonePageModule {}
