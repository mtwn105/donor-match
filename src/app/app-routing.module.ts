import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AddDetailsComponent } from './components/add-details/add-details.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'add-details',
    component: AddDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
