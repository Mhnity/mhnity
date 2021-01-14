import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StageLevelOneMRoutingModule } from './stage-level-one-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    StageLevelOneMRoutingModule
  ]
})
export class StageLevelOneMModule { }
