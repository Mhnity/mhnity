import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcoLevelFourMRoutingModule } from './eco-level-four-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    EcoLevelFourMRoutingModule
  ]
})
export class EcoLevelFourMModule { }
