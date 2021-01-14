import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path:"Level-one", loadChildren:()=>import('./eco-level-one-m/eco-level-one-m-routing.module')
    .then(me=>me.EcoLevelOneMRoutingModule)},
  {path:"Level-two", loadChildren:()=>import('./eco-level-two-m/eco-level-two-m-routing.module')
    .then(me=>me.EcoLevelTwoMRoutingModule)},
  {path:"Level-three", loadChildren:()=>import('./eco-level-three-m/eco-level-three-m-routing.module')
    .then(me=>me.EcoLevelThreeMRoutingModule)},
  {path:"Level-four", loadChildren:()=>import('./eco-level-four-m/eco-level-four-m-routing.module')
    .then(me=>me.EcoLevelFourMRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EconomicMRoutingModule { }
