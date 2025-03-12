import { Routes } from '@angular/router';
import { AuthComponent } from './app/pages/Auth/Auth.component';
import { LoginComponent } from './app/pages/Auth/Login/Login.component';
import { RegisterComponent } from './app/pages/Auth/Register/Register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];