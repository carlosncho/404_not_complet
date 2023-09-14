import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ee404PageRoutingModule } from './ee404-routing.module';

import { Ee404Page } from './ee404.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ee404PageRoutingModule
  ],
  declarations: [Ee404Page]
})
export class Ee404PageModule {}
