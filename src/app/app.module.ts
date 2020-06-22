import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeModule } from './employee-module/employee.module';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { CompanyService } from './_service/company.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AdminModule } from './admin-module/admin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
  MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EmployeeModule,
    SharedModule,
    HttpClientModule,
    AdminModule

  ],
  providers: [CompanyService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
