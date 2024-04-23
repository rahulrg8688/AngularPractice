import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ServiceComponent } from './service/service.component';
import { ProfileComponent } from './profile/profile.component';
import { SlidesComponent } from './slides/slides.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"service",
    component:ServiceComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:'slides',
    component:SlidesComponent
  },
  {
  path:'user',
  component:UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
