import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicLevelOneMRoutingModule } from './music-level-one-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MusicLevelOneMRoutingModule
  ]
})
export class MusicLevelOneMModule { }
