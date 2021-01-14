import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicLevelThreeMRoutingModule } from './music-level-three-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MusicLevelThreeMRoutingModule
  ]
})
export class MusicLevelThreeMModule { }
