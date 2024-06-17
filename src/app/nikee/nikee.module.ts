import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NikeePageRoutingModule } from './nikee-routing.module';
import { NikeePage } from './nikee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NikeePageRoutingModule
  ],
  declarations: [NikeePage]
})
export class NikeePageModule {}

