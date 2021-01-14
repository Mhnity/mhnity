import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path:"Level-one", loadChildren:()=>import('./stage-level-one-m/stage-level-one-m-routing.module')
    .then(me=>me.StageLevelOneMRoutingModule)},
  {path:"Level-two", loadChildren:()=>import('./stage-level-two-m/stage-level-two-m-routing.module')
    .then(me=>me.StageLevelTwoMRoutingModule)},
  {path:"Level-three", loadChildren:()=>import('./stage-level-three-m/stage-level-three-m-routing.module')
    .then(me=>me.StageLevelThreeMRoutingModule)},
  {path:"Level-four", loadChildren:()=>import('./stage-level-four-m/stage-level-four-m-routing.module')
    .then(me=>me.StageLevelFourMRoutingModule)} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StageMRoutingModule { }
