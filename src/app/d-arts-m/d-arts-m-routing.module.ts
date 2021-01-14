import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path:"Level-one",loadChildren:()=>import('../d-arts-m/art-level-one-m/art-level-one-m-routing.module')
    .then(me=>me.ArtLevelOneMRoutingModule)},
  {path:"Level-two", loadChildren:()=>import('../d-arts-m/art-level-two-m/art-level-two-m-routing.module')
    .then(me=>me.ArtLevelTwoMRoutingModule) },
  {path:"Level-three", loadChildren:()=>import('../d-arts-m/art-level-three-m/art-level-three-m-routing.module')
    .then(me=>me.ArtLevelThreeMRoutingModule)},
  {path:"Level-four", loadChildren:()=>import('../d-arts-m/art-level-four-m/art-level-four-m-routing.module')
    .then(me=>me.ArtLevelFourMRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DArtsMRoutingModule { }
