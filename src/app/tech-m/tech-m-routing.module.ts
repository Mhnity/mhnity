import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"Level-one", loadChildren:()=>import('./tech-level-one-m/tech-level-one-m-routing.module')
    .then(me=>me.TechLevelOneMRoutingModule)},
  {path:"Level-two", loadChildren:()=>import('./tech-level-two-m/tech-level-two-m-routing.module')
    .then(me=>me.TechLevelTwoMRoutingModule)},
  {path:"Level-three", loadChildren:()=>import('./tech-level-three-m/tech-level-three-m-routing.module')
    .then(me=>me.TechLevelThreeMRoutingModule)},
  {path:"Level-four", loadChildren:()=>import('./tech-level-four-m/tech-level-four-m-routing.module')
    .then(me=>me.TechLevelFourMRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechMRoutingModule { }
