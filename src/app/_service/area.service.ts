import { Area } from '../_model/area';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

  export class AreaService {
  url = 'https://queue-sys-backend.herokuapp.com';

    constructor(private http: HttpClient) { }
  Areas: Area[]=[];
    // Areas:Area[] = [
    //   { cityId: 1, areaName: 'El-Eshreny' },
    //   { cityId: 1, areaName: 'EL-Khamsa' },
    //   { cityId: 1, areaName: 'EL-7ekr' },
    //   { cityId: 1, areaName: 'EL-togary' },
    //   { cityId: 1, areaName: 'Shbeen' },
    //   { cityId: 2, areaName: 'Trh-ELbahr' },
    //   { cityId: 2, areaName: 'Porfoaad' },
    //   { cityId: 2, areaName: 'EL-Talateny' },
    //   { cityId: 3, areaName: 'El-Malahaa' },
    //   { cityId: 3, areaName: 'El-Suez' },
    //   { cityId: 3, areaName: 'EL-Arbeen' },
    //   { cityId: 3, areaName: 'Nile Street' },
    //   { cityId: 3, areaName: 'El-kornesh' },
    //   { cityId: 4, areaName: 'El-Mrg' },
    //   { cityId: 4, areaName: '6-October' },
    //   { cityId: 4, areaName: 'EL-zmalyeek' },
    //   { cityId: 4, areaName: 'Helwan' },
    //   { cityId: 4, areaName: 'Giza' },
    //   { cityId: 5, areaName: 'EL-Mamora' },
    //   { cityId: 5, areaName: 'EL-Agmy' },
    //   { cityId: 5, areaName: 'El-Mndra' }
    // ];

    getById(id: number) {
      let cityArea = this.Areas.filter(a => a.cityId === id);
      return cityArea;
    }

  getAreaByCityId(cityId){
      return this.http.get(`${this.url}/city/area/${cityId}`);
    }
  }
