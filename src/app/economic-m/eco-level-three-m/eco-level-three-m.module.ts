import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcoLevelThreeMRoutingModule } from './eco-level-three-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    EcoLevelThreeMRoutingModule
  ]
})
export class EcoLevelThreeMModule { }
