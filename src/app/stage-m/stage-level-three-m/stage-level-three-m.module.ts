import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StageLevelThreeMRoutingModule } from './stage-level-three-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    StageLevelThreeMRoutingModule
  ]
})
export class StageLevelThreeMModule { }
