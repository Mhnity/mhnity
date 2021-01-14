import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'Level-one', loadChildren:()=>import('./level-one-m/level-one-m-routing.module')
    .then(me=>me.LevelOneMRoutingModule)},
  {path:'Level-two', loadChildren:()=>import('./level-two-m/level-two-m-routing.module')
     .then(me=>me.LevelTwoMRoutingModule)},
  {path:'Level-three', loadChildren:()=>import('./level-three-m/level-three-m-routing.module')
    .then(me=>me.LevelThreeMRoutingModule)},
  {path:'Level-four', loadChildren:()=>import('./level-four-m/level-four-m-routing.module')
     .then(me=>me.LevelFourMRoutingModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComputerMRoutingModule { }
