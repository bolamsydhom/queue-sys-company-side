import { Injectable } from '@angular/core';
import { UserModel } from '../_model/user';
import { HttpClient } from '@angular/common/http';
import { City } from './../_model/city';
import { Area } from './../_model/area';
import { browser } from 'protractor';

@Injectable()
export class User {
 iceId;

  url = 'https://queue-sys-backend.herokuapp.com/';

  constructor(private http: HttpClient) {}

  //private http: HttpClient

    //private http: HttpClient
    register(user: UserModel) {
        console.log(user)
        return this.http.post(`${this.url}user/register`, user);
    }


    emailLogin(email) {

        return this.http.post(`${this.url}user/email`, { email })
    }

    Login(user) {

        return this.http.post(`${this.url}user/login`, user)
    }
}

