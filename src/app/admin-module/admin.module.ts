import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RegisterBranchComponent } from './admin/register-branch/register-branch.component';
import { HeaderComponent } from './header/header.component';

@NgModule({

  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    AdminRoutingModule

  ],
  providers: [],
  exports: [MaterialModule],
  declarations: [SideBarComponent, AdminComponent, RegisterBranchComponent, HeaderComponent]
})
export class AdminModule { }
