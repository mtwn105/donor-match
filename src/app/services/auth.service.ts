import { Injectable } from '@angular/core';
import { PassageUser, PassageUserInfo } from '@passageidentity/passage-elements/passage-user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
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

    return JSON.parse(localStorage.getItem('user') as any);
  }

  public async isLoggedIn(): Promise<boolean> {
    this.isLoading = true;
    return await new PassageUser().userInfo().then(userInfo => {
      if (userInfo !== undefined) {
        this.user = userInfo;
        localStorage.setItem('user', JSON.stringify(userInfo));
        this.isLoading = false;
        this.isAuthenticated = true;
        this.username = userInfo.email ? userInfo.email : userInfo.phone;
      } else {
        this.isLoading = false;
        this.isAuthenticated = false;
        this.username = '';
      }
      return this.isAuthenticated;

    })
  }

}
