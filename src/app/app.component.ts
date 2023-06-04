import { Component, OnInit } from '@angular/core';
import { Api } from './helpers/api';
import { Account, ID } from 'appwrite';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'donor-match';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  async ngOnInit() {
    const account = new Account(Api.provider());

    const user = await account.get();

    if (user) {
      console.log('User already logged in', user);
      this.authService.saveUser(user);
      this.router.navigate(['/add-details']);
      return;
    }
  }

}
