import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tick } from '@angular/core/testing';
import { browser } from 'protractor';

@Injectable({ providedIn: 'root' })
export class TicketService {
  constructor(private http: HttpClient) { }

  // object:{
  //   user,
  //   city}
  city;
  cityId;
  area;
  areaId;
  company;
  companyId;
  branch;
  branchId;
  service;
  serv
  // function(type,value){
  //   this.objec[type]=value}
  postUserData(key: string, value) {
    switch (key) {
      case 'city':
        this.city = value;
        break;
      case 'cityId':
        this.cityId = value;
        break;
      case 'area':
        this.area = value;
        break;
      case 'areaId':
        this.areaId = value;
        break;
      default:
      // code block
    }
  }

  getCityID() {
    return this.cityId;
  }
  getCompanyId() {
    return this.companyId;
  }
  url = 'https://queue-sys-backend.herokuapp.com';
  goToTicket(ticketData) {
    return this.http.post(`${this.url}/queue/book?actual=1`, ticketData);
  }

  cstCame(cstData) {
    console.log(cstData);

    return this.http.post(`${this.url}/queue/cstCame`, cstData)
  }

}
