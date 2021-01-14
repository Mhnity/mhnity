import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelTwoMRoutingModule } from './level-two-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LevelTwoMRoutingModule
  ]
})
export class LevelTwoMModule { }
