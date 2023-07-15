import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatOptionModule } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';


import { LoginComponent } from './components/login/login.component';
import { AddDetailsComponent } from './components/add-details/add-details.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './services/auth.service';
import { AngularMaterialModule } from './material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from '../environments/environment';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatOptionModule,
    MatNativeDateModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AuthGuard, AuthService, UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
