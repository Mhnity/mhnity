import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtLevelOneMRoutingModule } from './art-level-one-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ArtLevelOneMRoutingModule
  ]
})
export class ArtLevelOneMModule { }
