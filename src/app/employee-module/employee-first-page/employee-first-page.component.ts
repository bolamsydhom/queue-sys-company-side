
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { Subject, interval, BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AreaService } from 'src/app/_service/area.service';
import { CompanyService } from 'src/app/_service/company.service';
import { CitiesService } from 'src/app/_service/cities.service';
import { BranchService } from 'src/app/_service/branch.service';
// import { takeUntil } from 'rxjs/operators';
import { TicketService } from 'src/app/_service/ticket.service';


@Component({
  selector: 'app-employee-first-page',
  templateUrl: './employee-first-page.component.html',
  styleUrls: ['./employee-first-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFirstPageComponent implements OnInit {

  companies;
  registerBranch: FormGroup;
  workingDay: FormGroup;
  companyId;
  cityID;
  locationIds;
  locations = [{}];
  areas;
  services;
  branches;
  service;
  queuenum: Number;
  queueNumEmiiter = new BehaviorSubject<Number>(this.queuenum);

  valid = false;
  notValid = false;
  cstCode;

  constructor(private areaService: AreaService,
    private companyService: CompanyService,
    private _formBuilder: FormBuilder,
    private cityService: CitiesService,
    private branchService: BranchService,
    private ticketService: TicketService,
    private ngZone: NgZone) {



    this.registerBranch = new FormGroup({
      companyInput: new FormControl(null),
      city: new FormControl(null),
      branch: new FormControl(null),
      service: new FormControl(null),


    });
  }

  ngOnInit(): void {
    this.queuenum = 0;

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


    // this.services = company.services;
    // this.cityService.getCityByID
    // console.log();


  }

  onCityChange() {
    const cityId = this.registerBranch.value.city;
    const companyId = this.registerBranch.value.companyInput;

    console.log(cityId);
    console.log(companyId);

    this.branchService.getBranchesByCityIdAndCompanyId(cityId, companyId).subscribe(
      (data) => {
        console.log(data);


        this.branches = data;
      }
    );

  }

  onBranchChange() {
    const branchId = this.registerBranch.value.branch;
    const br = this.branches.find((b) => {
      if (b._id === branchId) { return b; }
    });
    console.log(this.registerBranch.value);
    console.log(br);


    this.services = br.services;
    console.log(this.services);

  }

  onServiceChange() {
    const serviceId = this.registerBranch.value.service;
    this.service = this.services.find((b) => {
      if (b._id === serviceId) { return b; }
    });
  }
  onSubmit() {
    // this.queuenum = this.queuenum + 1
    const ticket = { ...this.registerBranch.value };
    const ticketAdd = {
      companyId: ticket.companyInput,
      branchId: ticket.branch,
      cityId: ticket.city,
      service: this.service,
    };
    let num;
    this.ticketService.goToTicket(ticketAdd).subscribe(
      (respond) => {
        this.queuenum = respond['queueNumber'];
        this.queueNumEmiiter.next(this.queuenum);
        console.log(this.queuenum);
        // this.ngZone.run(() => {
        // })
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(ticketAdd);

  }

  OnSecurityCodeCheck(userSecurityCode: Number) {

    const data = { ...this.registerBranch.value };
    const cstCame = {
      companyId: data.companyInput,
      branchId: data.branch,
      cityId: data.city,
      service: this.service,
      cstCode: +userSecurityCode
    };
    console.log(cstCame);
    this.ticketService.cstCame(cstCame).subscribe(
      (res) => {
        console.log("done");
        this.notValid = false;

        this.valid = true;

        this.cstCode = '';
      },
      (err) => {
        this.valid = false;
        this.notValid = true;

        console.log(err);
      }
    );

    //   if (userSecurityCode === this.securityCode) {
    //     //alert('user verified');
    //     this.isUserVerified = true;

    //   }
    //   else {
    //     this.isUserVerified = false;
    //   }
    //   console.log(this.isUserVerified)
    // }

  }

}
