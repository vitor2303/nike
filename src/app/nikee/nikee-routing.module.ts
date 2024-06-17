import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NikeePage } from './nikee.page';

const routes: Routes = [
  {
    path: '',
    component: NikeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NikeePageRoutingModule {}

