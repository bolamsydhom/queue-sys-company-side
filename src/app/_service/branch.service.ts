import { Branch } from './../_model/branch';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BranchService {
  constructor(private http: HttpClient) { }
  url = 'https://queue-sys-backend.herokuapp.com';
  branches: Branch[] = [
    {
      branchId: 1,
      branchName: 'Shbeen (Main Branch)',
      start: 9,
      end: 15,
      services: [{ serviceId: 1, serviceName: 'a', departmentId: 1 },
      { serviceId: 2, serviceName: 'b', departmentId: 1 },{ serviceId: 3, serviceName: 'c', departmentId: 1 },{ serviceId: 4, serviceName: 'fgh', departmentId: 1 }],
      companyId: '5ee3627284fd0b3aacab6eb9'
    },
    {
      branchId: 2,
      branchName: 'EL-khamsa',
      start: 8,
      end: 14,
      services: [{ serviceId: 2, serviceName: 'b', departmentId: 1 }],
      companyId: '5ee3627284fd0b3aacab6eb9'
    },
    {
      branchId: 3,
      branchName: 'EL-Soltan',
      start: 10,
      end: 20,
      services: [{ serviceId: 3, serviceName: 'c', departmentId: 1 }],
      companyId: '5ee3627284fd0b3aacab6eb9'
    },
    {
      branchId: 4,
      branchName: 'EL-Eshreeny',
      start: 9,
      end: 15,
      services: [{ serviceId: 4, serviceName: 'a', departmentId: 1 }],
      companyId: '5ee3627284fd0b3aacab6eb9'
    },
    {
      branchId: 5,
      branchName: 'EL-Togary',
      start: 9,
      end: 15,
      services: [{ serviceId: 5, serviceName: 'b', departmentId: 1 }],
      companyId: '5ee3636884fd0b3aacab6eba'
    },
    {
      branchId: 6,
      branchName: 'Shbeen',
      start: 9,
      end: 15,
      services: [{ serviceId: 6, serviceName: 'c', departmentId: 1 }],
      companyId: '5ee3636884fd0b3aacab6eba'
    },
    {
      branchId: 7,
      branchName: 'Reda',
      start: 9,
      end: 15,
      services: [{ serviceId: 7, serviceName: 'a', departmentId: 1 }],
      companyId: '5ee3636884fd0b3aacab6eba'
    },
    {
      branchId: 8,
      branchName: 'Ebrahim Salama',
      start: 9,
      end: 15,
      services: [{ serviceId: 8, serviceName: 'b', departmentId: 1 }],
      companyId: '5ee3648d84fd0b3aacab6ebc'
    },
    {
      branchId: 9,
      branchName: 'EL-Sab3a',
      start: 9,
      end: 15,
      services: [{ serviceId: 9, serviceName: 'c', departmentId: 1 }],
      companyId: '5ee3648d84fd0b3aacab6ebc'
    },
    {
      branchId: 10,
      branchName: 'bola',
      start: 9,
      end: 15,
      services: [{ serviceId: 10, serviceName: 'd', departmentId: 1 }],
      companyId: '5ee3648d84fd0b3aacab6ebc'
    }
  ];

  getBranchByID(id: number) {
    return this.branches.filter(b => b.branchId === id);
  }
  // getBranchByName(name: string) {
  //   return this.branches.filter(b => b.branchName === name);
  // }
  getBranchesByCompanyId(companyId: number) {
    return this.branches.filter(b => b.companyId === companyId);
  }
  getServicesByBranchId(branchId: number) {
    let branch = this.branches.filter(b => b.branchId === branchId);
    return branch[0].services;
  }

  addBranch(branch){
    return this.http.post(`${this.url}/branch/add`,branch);
  }

  getById(cityId){
    return this.http.get(`${this.url}/branch/city/${cityId}`);

  }

  getBranchesByCityIdAndCompanyId(cityId, companyId) {
    return this.http.get(
      `${this.url}/branch/branch?cityid=${cityId}&companyid=${companyId}`
    );
  }
}
