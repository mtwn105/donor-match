import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;

  constructor() { }

  saveUser(user: any) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {

    if (localStorage.getItem('user') === null) {
      return null;
    }

    return JSON.parse(localStorage.getItem('user') as any);
  }

}
