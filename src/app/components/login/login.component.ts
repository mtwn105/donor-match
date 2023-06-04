import { Component, OnInit } from '@angular/core';
import { Api } from '../../helpers/api';
import { Account } from 'appwrite';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async login() {
    const account = new Account(Api.provider());

    const user = await account.get();

    if (user) {
      console.log('User already logged in', user);
      return;
    }

    // Go to OAuth provider login page
    account.createOAuth2Session('google', 'http://localhost:4200');
  }

}
