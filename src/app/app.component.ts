import { Component, OnInit } from '@angular/core';
import { Api } from './helpers/api';
import { Account, ID } from 'appwrite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'donor-match';

  ngOnInit(): void {
    // const account = new Account(Api.provider());

    // // Register User
    // account.create(
    //   ID.unique(),
    //   'me@example.com',
    //   'password',
    //   'Jane Doe'
    // ).then(response => {
    //   console.log(response);
    // }, error => {
    //   console.log(error);
    // });
  }

}
