import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../_model/city';
@Injectable({ providedIn: 'root' })
export class CitiesService {
  constructor(private http: HttpClient) {}
  url = 'https://queue-sys-backend.herokuapp.com';
  cities: City[] = [
    { cityId: 1, cityName: 'ismailia' },
    { cityId: 2, cityName: 'portsacityId' },
    { cityId: 3, cityName: 'suez' },
    { cityId: 4, cityName: 'cairo' },
    { cityId: 5, cityName: 'alex' }
  ];
  getAllCities() {
    return this.http.get(`${this.url}/city`);
  }

  getCityByID(id) {
    return this.http.get(`${this.url}/city/${id}`);
  }

  getCityByName(name: string) {
    return this.cities.filter(c => c.cityName === name);
  }
}
