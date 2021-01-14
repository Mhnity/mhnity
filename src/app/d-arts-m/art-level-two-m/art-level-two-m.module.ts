import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtLevelTwoMRoutingModule } from './art-level-two-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ArtLevelTwoMRoutingModule
  ]
})
export class ArtLevelTwoMModule { }
