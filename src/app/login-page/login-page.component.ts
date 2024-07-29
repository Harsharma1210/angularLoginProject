import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { HttpErrorResponse } from '@angular/common/http';

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
  };
  response:string = '';

  constructor(private dataService: DataService) {}; //Constructed the injectible

  onSubmit(event: Event){
    event.preventDefault() //Prevents the default form submission because that forces a total page reload which makes the app slower

    this.dataService.sendData(this.payload).subscribe(
      (data:any) => {
        this.response = 'Success: ' + JSON.stringify(data);
      },
      (error: HttpErrorResponse) => {
        this.response = 'Error: ' + JSON.stringify(error);
      }
    );
  }
}
