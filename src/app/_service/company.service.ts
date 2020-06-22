import { Company } from './../_model/company';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  constructor(private http: HttpClient) {}
  url = 'https://queue-sys-backend.herokuapp.com';
  companySelected = new EventEmitter<Company>();

  companies: Company[] = [];

  getAllCompanies() {
    return this.http.get(`${this.url}/organization`);

    // return this.companies.slice();
  }

  getCompanyById(id) {
    // return this.companies.find(p => p.id === id);
    return this.http.get(`${this.url}/organization/${id}`);
  }
  getCompaniesByCityId(cityId: string) {
    console.log(`${this.url}/organization/city/${cityId}`);
    return this.http.get(`${this.url}/organization/city/${cityId}`);
  }
}
