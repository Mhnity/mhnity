import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaLevelFourMRoutingModule } from './media-level-four-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MediaLevelFourMRoutingModule
  ]
})
export class MediaLevelFourMModule { }
