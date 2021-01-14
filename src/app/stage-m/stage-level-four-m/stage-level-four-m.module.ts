import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StageLevelFourMRoutingModule } from './stage-level-four-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    StageLevelFourMRoutingModule
  ]
})
export class StageLevelFourMModule { }
