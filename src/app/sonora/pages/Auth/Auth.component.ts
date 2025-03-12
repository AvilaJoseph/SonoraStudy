import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    RegisterComponent
  ],
  templateUrl: './Auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent { }