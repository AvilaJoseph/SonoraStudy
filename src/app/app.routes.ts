import { Routes } from '@angular/router';
import { AuthComponent } from './sonora/pages/Auth/Auth.component';
import { LoginComponent } from './sonora/pages/Auth/Login/Login.component';
import { RegisterComponent } from './sonora/pages/Auth/Register/Register.component';
import { SonoraHomeComponent } from './shared/pages/SonoraHome/SonoraHome.component';


export const routes: Routes = [
  {
    path: '',
    component: SonoraHomeComponent
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