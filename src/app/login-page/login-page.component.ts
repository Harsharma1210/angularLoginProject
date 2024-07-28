import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  payload = {
    loginType:"email",
    loginValue: '',
    passwordType: 'password', 
    passwordValue: '',
    organizationCode:"100337",
	  tenantCode:"1000248",
	  sourceType:"CP"
  }
}
