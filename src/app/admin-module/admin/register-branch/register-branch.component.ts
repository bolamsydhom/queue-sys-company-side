import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-register-branch',
  templateUrl: './register-branch.component.html',
  styleUrls: ['./register-branch.component.scss']
})
export class RegisterBranchComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  days = ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednsyday', 'Thursday'];
  services = [{ selected: 'primary', name: 'service 1' },
  { selected: 'primary', name: 'service 2' },
  { selected: 'primary', name: 'service 3' }];
  hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  displayedColumns: string[] = ['Day', 'Start', 'End'];
  selectd = 'primary';
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  departments= [{name:''}];
    // { name: 'Lemon' }




  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      branchName: ['', Validators.required],
      locations: ['', Validators.required],
      startShift: ['', Validators.required],
      endShift: ['', Validators.required],

    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }
  serviceSelected(service) {
    let ser = this.services.filter(ser => ser === service);
    ser[0].selected = ser[0].selected === 'warn' ? 'primary' : 'warn';
    console.log(service);


  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our department
    if ((value || '').trim()) {
      this.departments.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(department): void {
    const index = this.departments.indexOf(department);

    if (index >= 0) {
      this.departments.splice(index, 1);
    }
  }

}
