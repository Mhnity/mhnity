import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';

import { LevelOneMRoutingModule } from './level-one-m-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  exports:[HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    LevelOneMRoutingModule
  ]
})
export class LevelOneMModule { }
