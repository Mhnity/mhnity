import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtLevelFourMRoutingModule } from './art-level-four-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ArtLevelFourMRoutingModule
  ]
})
export class ArtLevelFourMModule { }
