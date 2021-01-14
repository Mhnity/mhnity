import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelThreeMRoutingModule } from './level-three-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LevelThreeMRoutingModule
  ]
})
export class LevelThreeMModule { }
