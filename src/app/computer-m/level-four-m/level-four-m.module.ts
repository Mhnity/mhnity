import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelFourMRoutingModule } from './level-four-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LevelFourMRoutingModule
  ]
})
export class LevelFourMModule { }
