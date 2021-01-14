import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddYourSelfComponent } from './components/add-your-self/add-your-self.component';
import { AdmainComponent } from './components/admain/admain.component';
import { FollowComponent } from './components/follow/follow.component';
import { GetOffersComponent } from './components/get-offers/get-offers.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { GardService } from './services/gard.service';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'computer',loadChildren:()=>import('./computer-m/computer-m-routing.module')
  .then(sub=> sub.ComputerMRoutingModule)},
  {path:'arts',loadChildren:()=>import('./d-arts-m/d-arts-m-routing.module')
  .then(sub=> sub.DArtsMRoutingModule)},
  {path:'economic',loadChildren:()=>import('./economic-m/economic-m-routing.module')
  .then(sub=> sub.EconomicMRoutingModule)},
  {path:'media',loadChildren:()=>import('./media-m/media-m-routing.module')
  .then(sub=> sub.MediaMRoutingModule)},
  {path:'music',loadChildren:()=>import('./music-m/music-m-routing.module')
  .then(sub=> sub.MusicMRoutingModule)},
  {path:'stage',loadChildren:()=>import('./stage-m/stage-m-routing.module')
  .then(sub=> sub.StageMRoutingModule)},
  {path:'tech',loadChildren:()=>import('./tech-m/tech-m-routing.module')
    .then(sub => sub.TechMRoutingModule) 
  },

  {path:'signup',  component:SignupComponent},
  {path:'login',   component:LoginComponent},
  {path:'admin',   component:AdmainComponent,canActivate:[GardService]},
  {path:'newProject',   component:AddYourSelfComponent},
  {path:'clients', component:GetOffersComponent},
  {path:'wellcome', component:WellcomeComponent},
  {path:'follow', component:FollowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
