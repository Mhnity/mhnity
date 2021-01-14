import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaLevelOneMRoutingModule } from './media-level-one-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MediaLevelOneMRoutingModule
  ]
})
export class MediaLevelOneMModule { }
