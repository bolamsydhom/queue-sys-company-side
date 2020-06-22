import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RegisterBranchComponent } from './admin/register-branch/register-branch.component';


export const adminRoutes: Routes = [
  { path: 'register-branch', component: RegisterBranchComponent },
];
@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
exports: [RouterModule]
})
export class AdminRoutingModule { }
