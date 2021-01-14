import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtLevelThreeMRoutingModule } from './art-level-three-m-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ArtLevelThreeMRoutingModule
  ]
})
export class ArtLevelThreeMModule { }
