import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaterialModule } from '../material.module';
import { User } from '../_service/user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AreaService } from './../_service/area.service';
import { CompanyService } from '../_service/company.service';
import { CitiesService } from '../_service/cities.service';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LandingPageComponent],
  imports: [
  CommonModule,
    MaterialModule
  ],
  providers: [User, HttpClientModule, HttpClient, AreaService, CompanyService, CitiesService]
})
export class SharedModule { }
