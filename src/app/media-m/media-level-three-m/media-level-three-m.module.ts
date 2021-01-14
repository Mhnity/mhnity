import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaLevelThreeMRoutingModule } from './media-level-three-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MediaLevelThreeMRoutingModule
  ]
})
export class MediaLevelThreeMModule { }
