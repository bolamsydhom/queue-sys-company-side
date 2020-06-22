import { Component, OnInit } from '@angular/core';
import { AreaService } from './../../_service/area.service';
import { CompanyService } from 'src/app/_service/company.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CitiesService } from './../../_service/cities.service';
import { map } from 'rxjs/operators';
import { City } from './../../_model/city';
import { BranchService } from 'src/app/_service/branch.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  companies;
  registerBranch: FormGroup;
  workingDay: FormGroup;
  companyId;
  cityID;
  locationIds;
  locations = [{}];
  areas;
  services;
  days = ['Saturday', 'Sudnday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  // companyInput;
  workDays = [];

  constructor(private areaService: AreaService,
    private companyService: CompanyService,
    private _formBuilder: FormBuilder,
    private cityService: CitiesService,
    private branchService: BranchService) {

    this.registerBranch = new FormGroup({
      companyInput: new FormControl(null),
      branchName: new FormControl(null),
      city: new FormControl(null),
      area: new FormControl(null),
      services: new FormControl(null),


    });
    this.workingDay = new FormGroup({
      day: new FormControl(),
      openShift: new FormControl(null),
      endShift: new FormControl(null),
    });
  }

  ngOnInit(): void {

    this.companyService.getAllCompanies().subscribe(
      (data) => { this.companies = data; }
    );
  }


  onCompanyChange() {
    // this.companyService.getCompanyById(this.registerBranch.value.companyInput).subscribe(
    //   (company) => {this.locationIds =company['locations']}
    // )
    const companyId = this.registerBranch.value.companyInput;
    const company = this.companies.find(c => c._id === companyId);
    company.locations.map(location => this.cityService.getCityByID(location).subscribe(
      (data) => {
        // console.log(data);
        this.locations.push(data);
      }

    ));


    this.services = company.services;
    console.log(this.services);

    // this.cityService.getCityByID
    // console.log();


  }

  onCityChange() {
    const cityId = this.registerBranch.value.city;
    // console.log(cityId);

    this.areaService.getAreaByCityId(cityId).subscribe(
      (data) => {
        // console.log(data);


        this.areas = data;
      }
    );

  }

  onAddDay() {
    const working = { ...this.workingDay.value };
    // console.log(working);
    this.workDays.push(working);
    // console.log(this.workDays);
  }

  onSubmit() {



    const branch = { ...this.registerBranch.value };
    const branchI = {
      companyId: branch.companyInput,
      branchName: branch.branchName,
      cityId: branch.city,
      workingDays: this.workDays,
      services: branch.services,
      areaId: branch.area
    };

    this.branchService.addBranch(branchI).subscribe(
      (data) => {
        data ? console.log('sucesss', branchI) : console.log('error');
        ;
      }
    )
    console.log(branchI);



    // this.done = true;
    // this.contentService.storeContent(content).subscribe(
    //   (response) => this.done = true,
    //   (error) => this.err = true
    // );
  }
}
