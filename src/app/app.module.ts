import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ServicesComponent } from './component/services/services.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AdminComponent } from './component/admin/admin.component';
import { NavbarComponentComponent } from './component/navbar-component/navbar-component.component';
import { NavbarFooterComponent } from './component/navbar-footer/navbar-footer.component';
import { BlogComponent } from './component/blog/blog.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { CoursesComponent } from './component/courses/courses.component';
import { AngularComponent } from './component/courses/angular/angular.component';
import { ReactComponent } from './component/courses/react/react.component';
import { NodeComponent } from './component/courses/node/node.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactUsComponent,
    AdminComponent,
    NavbarComponentComponent,
    NavbarFooterComponent,
    BlogComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    LoginComponent,
    CoursesComponent,
    AngularComponent,
    ReactComponent,
    NodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
