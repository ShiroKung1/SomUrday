import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeirinPageRoutingModule } from './seirin-routing.module';

import { SeirinPage } from './seirin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeirinPageRoutingModule
  ],
  declarations: [SeirinPage]
})
export class SeirinPageModule {}
