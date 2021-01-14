import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechLevelThreeMRoutingModule } from './tech-level-three-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TechLevelThreeMRoutingModule
  ]
})
export class TechLevelThreeMModule { }
