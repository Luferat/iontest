import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadallPageRoutingModule } from './readall-routing.module';

import { ReadallPage } from './readall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadallPageRoutingModule
  ],
  declarations: [ReadallPage]
})
export class ReadallPageModule {}
