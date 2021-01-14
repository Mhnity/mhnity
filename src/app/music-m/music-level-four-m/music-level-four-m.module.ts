import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicLevelFourMRoutingModule } from './music-level-four-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MusicLevelFourMRoutingModule
  ]
})
export class MusicLevelFourMModule { }
