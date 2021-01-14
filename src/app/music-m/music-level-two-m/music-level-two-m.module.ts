import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicLevelTwoMRoutingModule } from './music-level-two-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MusicLevelTwoMRoutingModule
  ]
})
export class MusicLevelTwoMModule { }
