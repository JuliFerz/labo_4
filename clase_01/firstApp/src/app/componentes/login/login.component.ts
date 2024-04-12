import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'
import { User } from './interfaces/app-interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public user: User = {
    name: '',
    password: ''
  };

  constructor(private router: Router) {}

  public checkLogin(): void {
    if (!this.user.name || !this.user.password) return;
    if (this.user.name === 'test' && this.user.password === '123') {
      this.router.navigateByUrl('/bienvenido');
    } else {
      this.router.navigateByUrl('/error');
    }
  }
}
