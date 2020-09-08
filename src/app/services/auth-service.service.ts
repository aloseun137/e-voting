import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  loggedInStatus = JSON.parse(localStorage.getItem('status'));
  constructor() { }
  isLoggedIn() {
    return this.loggedInStatus;
  }
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }
}
