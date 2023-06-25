import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  appId = '';

  constructor() {
    this.appId = environment.appId;
  }

  ngOnInit(): void {
  }

  async login() {


  }

}
