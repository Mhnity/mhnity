import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';


import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
//dropdown
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';


import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdmainComponent } from './components/admain/admain.component';

/***************** import modules  ****/
//shart components
import { AddLessonComponent } from './components/courses/add-lesson/add-lesson.component';
import { ShowLessonsComponent } from './components/courses/show-lessons/show-lessons.component';
import { DelateLessonComponent } from './components/courses/delate-lesson/delate-lesson.component';
import { DelateCourseComponent } from './components/courses/delate-course/delate-course.component';
//computer
import {LevelOneMModule} from './computer-m/level-one-m/level-one-m.module';
import {LevelTwoMModule} from './computer-m/level-two-m/level-two-m.module'
import {LevelThreeMModule} from './computer-m/level-three-m/level-three-m.module';
import {LevelFourMModule} from './computer-m/level-four-m/level-four-m.module';
//arts
import {ArtLevelOneMModule} from './d-arts-m/art-level-one-m/art-level-one-m.module';
import {ArtLevelTwoMModule} from './d-arts-m/art-level-two-m/art-level-two-m.module';
import {ArtLevelThreeMModule} from './d-arts-m/art-level-three-m/art-level-three-m.module';
import {ArtLevelFourMModule} from './d-arts-m/art-level-four-m/art-level-four-m.module';
//economic
import {EcoLevelOneMModule} from './economic-m/eco-level-one-m/eco-level-one-m.module';
import {EcoLevelTwoMModule} from './economic-m/eco-level-two-m/eco-level-two-m.module';
import {EcoLevelThreeMModule} from './economic-m/eco-level-three-m/eco-level-three-m.module';
import {EcoLevelFourMModule} from './economic-m/eco-level-four-m/eco-level-four-m.module';
//media
import {MediaLevelOneMModule} from './media-m/media-level-one-m/media-level-one-m.module';
import {MediaLevelTwoMModule} from './media-m/media-level-two-m/media-level-two-m.module';
import {MediaLevelThreeMModule} from './media-m/media-level-three-m/media-level-three-m.module';
import {MediaLevelFourMModule} from './media-m/media-level-four-m/media-level-four-m.module';
//music
import {MusicLevelOneMModule} from './music-m/music-level-one-m/music-level-one-m.module';
import {MusicLevelTwoMModule} from './music-m/music-level-two-m/music-level-two-m.module';
import {MusicLevelThreeMModule} from './music-m/music-level-three-m/music-level-three-m.module';
import {MusicLevelFourMModule} from './music-m/music-level-four-m/music-level-four-m.module';
//stage
import {StageLevelOneMModule} from './stage-m/stage-level-one-m/stage-level-one-m.module';
import {StageLevelTwoMModule} from './stage-m/stage-level-two-m/stage-level-two-m.module';
import {StageLevelThreeMModule} from './stage-m/stage-level-three-m/stage-level-three-m.module';
import {StageLevelFourMModule} from './stage-m/stage-level-four-m/stage-level-four-m.module';
//tech
import {TechLevelOneMModule} from './tech-m/tech-level-one-m/tech-level-one-m.module';
import {TechLevelTwoMModule} from './tech-m/tech-level-two-m/tech-level-two-m.module';
import {TechLevelThreeMModule} from './tech-m/tech-level-three-m/tech-level-three-m.module';
import {TechLevelFourMModule} from './tech-m/tech-level-four-m/tech-level-four-m.module';
import { AddYourSelfComponent } from './components/add-your-self/add-your-self.component';
import { GetOffersComponent } from './components/get-offers/get-offers.component';
import { DelateOfferComponent } from './components/courses/delate-offer/delate-offer.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { FollowComponent } from './components/follow/follow.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NotfoundComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    AdmainComponent,
    AddLessonComponent,
    ShowLessonsComponent,
    DelateLessonComponent,
    DelateCourseComponent,
    AddYourSelfComponent,
    GetOffersComponent,
    DelateOfferComponent,
    WellcomeComponent,
    FollowComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ComboBoxModule,
    DropDownListModule,

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDgLtRv6NMNsB2_dYYhk8sqeswIvJ4pF-w",
      authDomain: "sawaqle-63d91.firebaseapp.com",
      projectId: "sawaqle-63d91",
      storageBucket: "sawaqle-63d91.appspot.com",
      messagingSenderId: "862191953186",
      appId: "1:862191953186:web:8ed71c662fc18c12ff717b",
      measurementId: "G-0C0J38RNGW"
    }),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MatDialogModule,
    BrowserAnimationsModule,
    /*** moduls ***/
    //computer
    LevelOneMModule,
    LevelTwoMModule,
    LevelThreeMModule,
    LevelFourMModule,
    LevelOneMModule,
    //arts
    ArtLevelOneMModule,
    ArtLevelTwoMModule,
    ArtLevelThreeMModule,
    ArtLevelFourMModule,
    //economic
    EcoLevelOneMModule,
    EcoLevelTwoMModule,
    EcoLevelThreeMModule,
    EcoLevelFourMModule,
    //media
    MediaLevelOneMModule,
    MediaLevelTwoMModule,
    MediaLevelThreeMModule,
    MediaLevelFourMModule,
    //music
    MusicLevelOneMModule,
    MusicLevelTwoMModule,
    MusicLevelThreeMModule,
    MusicLevelFourMModule,
    //stage
    StageLevelOneMModule,
    StageLevelTwoMModule,
    StageLevelThreeMModule,
    StageLevelFourMModule,
    //tech
    TechLevelOneMModule,
    TechLevelTwoMModule,
    TechLevelThreeMModule,
    TechLevelFourMModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
