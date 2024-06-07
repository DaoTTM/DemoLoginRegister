import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullname: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  email: string = '';
  phone: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = {
      fullname: this.fullname,
      username: this.username,
      password: this.password,
      email: this.email,
      phone: this.phone
    };

    this.authService.register(userData).subscribe(
      response => {
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      error => {
        alert('Registration failed');
      }
    );
  }
}
