import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public username: String | undefined = '';
  public isLoading: Boolean = false;
  public isAuthenticated: Boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoading = true;
    this.authService.isLoggedIn().then((result) => {
      if (result) {
        this.isLoading = this.authService.isLoading;
        this.isAuthenticated = this.authService.isAuthenticated;
        this.username = this.authService.username;
        console.log('User : ', this.authService.getUser());
      } else {
        this.isLoading = false;
        this.isAuthenticated = false;
        this.username = '';
      }
    })
  }

}
