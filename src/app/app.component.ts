import { Component, OnInit } from '@angular/core';
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


    // if (user) {
    //   console.log('User already logged in', user);
    //   this.authService.saveUser(user);
    //   this.router.navigate(['/add-details']);
    //   return;
    // }
  }

}
