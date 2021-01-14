import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path:"Level-one", loadChildren:()=>import('./music-level-one-m/music-level-one-m-routing.module')
     .then(me=>me.MusicLevelOneMRoutingModule)},
  {path:"Level-two", loadChildren:()=>import('./music-level-two-m/music-level-two-m-routing.module')
    .then(me=>me.MusicLevelTwoMRoutingModule)},
  {path:"Level-three", loadChildren:()=>import('./music-level-three-m/music-level-three-m-routing.module')
    .then(me=>me.MusicLevelThreeMRoutingModule)},
  {path:"Level-four", loadChildren:()=>import('./music-level-four-m/music-level-four-m-routing.module')
    .then(me=>me.MusicLevelFourMRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicMRoutingModule { }
