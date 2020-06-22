import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router'
import {
  Country,
  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher,
  PhoneValidator
} from '../validators';
import { User } from 'src/app/_service/user.service';
import { UserModel } from 'src/app/_model/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  userDetailsForm: FormGroup;
  accountDetailsForm: FormGroup;

  userData: FormGroup;
  matching_passwords_group: FormGroup;
  country_phone_group: FormGroup;

  parentErrorStateMatcher = new ParentErrorStateMatcher();

  // genders = [
  //   "Male",
  //   "Female",
  //   "Other"
  // ];

  countries = [
    new Country('EG', 'Egypt')
  ];

  account_validation_messages = {
    'firstname': [
      { type: 'required', message: 'Firstname is required' },
      { type: 'minlength', message: 'Firstname must be at least 3 characters long' },
      { type: 'maxlength', message: 'Firstname cannot be more than 10 characters long' },
      // { type: 'pattern', message: 'Your firstname must contain only numbers and letters' },
      // { type: 'validUsername', message: 'Your firstname has already been taken' }
    ],
    'lastname': [
      { type: 'required', message: 'Lastname is required' },
      { type: 'minlength', message: 'Lastname must be at least 3 characters long' },
      { type: 'maxlength', message: 'Lastname cannot be more than 10 characters long' },
      // { type: 'pattern', message: 'Your lastname must contain only numbers and letters' },
      // { type: 'validUsername', message: 'Your lastname has already been taken' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required' },
      { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
    ]
  }

  constructor(private fb: FormBuilder, private router: Router, private user: User) { }

  ngOnInit() {
    this.createForms();
  }

  createForms() {
    // matching passwords validation
    this.matching_passwords_group = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirm_password: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });

    // country & phone validation
    let country = new FormControl(this.countries[0], Validators.required);

    let phone = new FormControl('', {
      validators: Validators.compose([
        Validators.required,
        PhoneValidator.validCountryPhone(country)
      ])
    });

    this.country_phone_group = new FormGroup({
      country: country,
      phone: phone
    });

    // user links form validations
    this.accountDetailsForm = this.fb.group({
      firstname: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(10),
        Validators.minLength(3),

        // Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      lastname: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(10),
        Validators.minLength(3),
        // Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      matching_passwords: this.matching_passwords_group,
      country_phone: this.country_phone_group
    })

  }

  onSubmitAccountDetails(formData) {
    console.log(formData)
    // const userObject = {

    let userObject: UserModel = {
      firstName: formData.firstname,
      lastName: formData.lastname,
      email: formData.email,
      password: formData.matching_passwords.password,
      repeatedPassword: formData.matching_passwords.confirm_password,
      phoneNumber: formData.country_phone.phone
    }
    this.user.register(userObject)
      .subscribe(
        (response) => {
          const loginUser = {
            email: userObject.email,
            password: userObject.password
          }
          this.user.Login(loginUser).subscribe(
            (response) => {
              this.router.navigate(['./userlocation']);
            },
            (error) => {

            }
          )

        },
        (error) => {
          console.log(error)
          console.log('error')
        }
      );
  }


  goToLogin() {
    this.router.navigate(['./login']);
  }

}

