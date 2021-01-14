import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StageLevelTwoMRoutingModule } from './stage-level-two-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    StageLevelTwoMRoutingModule
  ]
})
export class StageLevelTwoMModule { }
