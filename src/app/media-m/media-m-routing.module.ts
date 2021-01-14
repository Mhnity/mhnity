import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path:"Level-one", loadChildren:()=>import('./media-level-one-m/media-level-one-m-routing.module')
    .then(me=>me.MediaLevelOneMRoutingModule)},
  {path:"Level-two", loadChildren:()=>import('./media-level-two-m/media-level-two-m-routing.module')
    .then(me=>me.MediaLevelTwoMRoutingModule)},
  {path:"Level-three", loadChildren:()=>import('./media-level-three-m/media-level-three-m-routing.module')
    .then(me=>me.MediaLevelThreeMRoutingModule)},
  {path:"Level-four", loadChildren:()=>import('./media-level-four-m/media-level-four-m-routing.module')
    .then(me=>me.MediaLevelFourMRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaMRoutingModule { }
