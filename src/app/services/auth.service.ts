import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  dbUser: any;
  isAuthenticated: boolean = false;
  public username: string | undefined = '';
  public isLoading: boolean = true;

  constructor() { }

  saveUser(user: any) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {

    if (localStorage.getItem('user') === null) {
      return null;
    }

    this.user = JSON.parse(localStorage.getItem('user') as any);

    return this.user;

  }

  setDbUser(dbUser: any) {
    this.dbUser = dbUser;
    localStorage.setItem('dbUser', dbUser);
  }

  getDbUser() {
    if (localStorage.getItem('dbUser') === null) {
      return null;
    }

    this.dbUser = localStorage.getItem('dbUser');

    return this.dbUser;
  }

  public async isLoggedIn() {
    this.isLoading = true;
    // return await new PassageUser().userInfo().then(userInfo => {
    //   if (userInfo !== undefined) {
    //     this.user = userInfo;
    //     localStorage.setItem('user', JSON.stringify(userInfo));
    //     this.isLoading = false;
    //     this.isAuthenticated = true;
    //     this.username = userInfo.email ? userInfo.email : userInfo.phone;
    //   } else {
    //     this.isLoading = false;
    //     this.isAuthenticated = false;
    //     this.username = '';
    //     localStorage.removeItem('user');
    //   }
    //   return this.isAuthenticated;

    // })
  }



}
