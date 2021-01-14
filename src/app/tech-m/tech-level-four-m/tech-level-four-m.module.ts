import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechLevelFourMRoutingModule } from './tech-level-four-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TechLevelFourMRoutingModule
  ]
})
export class TechLevelFourMModule { }
