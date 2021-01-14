import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaLevelTwoMRoutingModule } from './media-level-two-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MediaLevelTwoMRoutingModule
  ]
})
export class MediaLevelTwoMModule { }
