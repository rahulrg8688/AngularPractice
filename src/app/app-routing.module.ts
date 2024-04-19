import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ServicesComponent } from './component/services/services.component';
import { AdminComponent } from './component/admin/admin.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { CoursesComponent } from './component/courses/courses.component';
import { AngularComponent } from './component/courses/angular/angular.component';
import { ReactComponent } from './component/courses/react/react.component';
import { NodeComponent } from './component/courses/node/node.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"services",
    component:ServicesComponent
  },
  {
    path:"contact",
    component:ContactUsComponent
  },
  {
      path:"Admin",
      component:AdminComponent
    },
    {
    path:"blog",
    component:BlogComponent
    },
    {
      path:"registration",
      component:RegistrationComponent
    },
    {
      path:"Login",
      component:LoginComponent
    },
    {
      path:"dashboard",
      loadChildren:()=>import('./component/dashboard/dashboard.module').then(e=>e.DashboardModule)
    },
    {
      path:"courses",
      component:CoursesComponent,
      children:[
        {path:"",redirectTo:"/courses/angular",pathMatch:"full"},
        {path:"angular",component:AngularComponent},
        {path:"react",component:ReactComponent},
        {path:"node",component:NodeComponent}
      ]
    },
    {
      path:"**",
      component:PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
