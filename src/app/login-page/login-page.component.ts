import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService, DataTransfer } from '../data.service';
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
  response:any;

  constructor(private dataService: DataService, private router: Router, private dataTransfer: DataTransfer) {}; //Constructed the injectible

  onSubmit(event: Event)
  {
    //Prevents the default form submission because that forces a total page reload which makes the app slower
    event.preventDefault() 

    //Check to see if the username/email entered is in the form of an email or not using the following regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(emailRegex.test(this.payload.loginValue)) //If this returns true, then it matches an email format
    { 
      
      //Send the data to the API and get a response
      this.dataService.sendData(this.payload).subscribe(
        (data:any) => {
          
          //We keep the data as a JSON object so the next compnent can display it with a <pre></pre> tag
          this.response = data;
          
          console.log("We have sucessfully recieved Data from the API");
          console.log(this.response);

          //Set the injectable data to response and route to the next component
          this.dataTransfer.setData(this.response);
          this.router.navigate(['/data-view']);
        },
        (error: HttpErrorResponse) => {
          this.response = 'Error: ' + JSON.stringify(error);
        }
      );
    }
    else //It does not match an email format so we reload the page
    {
      window.location.reload();
      alert('You did not input an email!');
    }

    /*Send the data to the API and get a response
    this.dataService.sendData(this.payload).subscribe(
      (data:any) => {
        this.response = 'Success: ' + JSON.stringify(data);
        console.log("We have sucessfully recieved Data from the API");
        console.log(this.response);
        this.dataTransfer.setData(this.response); //Set the injectable data to response
        this.router.navigate(['/data-view']);
      },
      (error: HttpErrorResponse) => {
        this.response = 'Error: ' + JSON.stringify(error);
      }
    ); */
  }
}
