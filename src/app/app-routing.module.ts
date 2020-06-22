import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './shared/landing-page/landing-page.component';
import { EmployeeFirstPageComponent } from './employee-module/employee-first-page/employee-first-page.component';


const routes: Routes = [

  { path: 'employee', component: EmployeeFirstPageComponent },
  { path: '', component: LandingPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
