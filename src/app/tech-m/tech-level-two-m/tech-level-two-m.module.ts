import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechLevelTwoMRoutingModule } from './tech-level-two-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TechLevelTwoMRoutingModule
  ]
})
export class TechLevelTwoMModule { }
