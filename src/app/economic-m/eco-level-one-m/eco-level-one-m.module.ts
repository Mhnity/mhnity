import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcoLevelOneMRoutingModule } from './eco-level-one-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    EcoLevelOneMRoutingModule
  ]
})
export class EcoLevelOneMModule { }
