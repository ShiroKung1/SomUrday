import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeirinPage } from './seirin.page';

const routes: Routes = [
  {
    path: '',
    component: SeirinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeirinPageRoutingModule {}
