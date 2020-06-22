import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFirstPageComponent } from './employee-first-page/employee-first-page.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [EmployeeFirstPageComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: []
})
export class EmployeeModule { }
