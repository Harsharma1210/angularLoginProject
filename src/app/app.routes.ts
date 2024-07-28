import { Routes } from '@angular/router';
import { DataViewComponent } from './data-view/data-view.component';
import { LoginPageComponent } from './login-page/login-page.component';

//The path represents which URL matches which component
export const routes: Routes = [
  {
    path: '', //Since the path works in a first-match-found kind of way, the empty string will always match... especially if it is first in the array
    component: LoginPageComponent,
    title: 'Login Page'
  },
  {
    path: 'data-view',
    component: DataViewComponent
  }
];
