import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcoLevelTwoMRoutingModule } from './eco-level-two-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    EcoLevelTwoMRoutingModule
  ]
})
export class EcoLevelTwoMModule { }
