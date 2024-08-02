import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTransfer } from '../data.service'
import { KeyValuePair, apiResponse, dateOfBirth, userInfo } from './data.model';

@Component({
  selector: 'app-data-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-view.component.html',
  styleUrl: './data-view.component.css'
})
export class DataViewComponent implements OnInit {
  data:any; //Will be a JSON Object
  data_status: any;

  dob: dateOfBirth;
  UserInfo: userInfo;
  APIResponse: apiResponse;

  constructor(private dataTransfer: DataTransfer) { //Private variable 'dataTransfer' is of type 'DataTransfer'
    //Initializing the whole data type
    this.dob = {
      year: 0,
      month: 0,
      dayOfMonth: 0,
      hourOfDay: 0,
      minute: 0,
      second: 0
    }

    this.UserInfo = {
      authMrn: "",
      accessToken: "",
      source: "",
      age: 55,
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: this.dob,
      mrn: 0,
      mobile: "",
      dob: "",
      email: "",
      alternateMobile: "",
      walletBalance: "",
      customerSince: "",
      whatsappComm: 0,
      organizationCode: "",
      tenantCode: "",
      isAdmin: 0,
      isFirstLogin: 0,
      id_type: 0,
      modeId: "",
      colorPalleteId: "",
      languageId: ""
    }

    this.APIResponse = {
      reason: "",
      login_response: this.UserInfo,
      status: ""
    }
  }

  //The following three methods are for TypeGuarding the data received from the API
  isDateOfBirth(obj: any): obj is dateOfBirth {
    return typeof obj.year === 'number' && 
         typeof obj.month === 'number' && 
         typeof obj.dayOfMonth === 'number' && 
         typeof obj.hourOfDay === 'number' && 
         typeof obj.minute === 'number' && 
         typeof obj.second === 'number' 
  }

  isLoginResponse(obj: any): obj is userInfo {
    return typeof obj.authMrn === 'string' && 
           typeof obj.accessToken === 'string' && 
           typeof obj.source === 'string' &&  
           typeof obj.age === 'number' && 
           typeof obj.firstName === 'string' && 
           typeof obj.lastName === 'string' &&  
           typeof obj.gender === 'string' &&
           this.isDateOfBirth(obj.dateOfBirth) && 
           typeof obj.mrn === 'number' &&  
           typeof obj.mobile === 'string' && 
           typeof obj.dob === 'string' && 
           typeof obj.email === 'string' &&  
           typeof obj.alternateMobile === 'string' && 
           typeof obj.walletBalance === 'string' && 
           typeof obj.customerSince === 'string' && 
           typeof obj.whatsappComm === 'number' &&  
           typeof obj.organizationCode === 'string' &&  
           typeof obj.tenantCode === 'string' && 
           typeof obj.isAdmin === 'number' &&  
           typeof obj.isFirstLogin === 'number' && 
           typeof obj.id_type === 'number' && 
           typeof obj.modeId === 'string' &&  
           typeof obj.colorPalleteId === 'string' &&  
           typeof obj.languageId === 'string'
  }

  isApiResponse(obj: any): obj is apiResponse {
    return typeof obj.reason === 'string' &&
           this.isLoginResponse(obj.login_response) &&
           typeof obj.status === 'string';
  }

  //JSON Data => Key/Value Pairs => Assign to new type
  ngOnInit() {
    
    //The data from loginPageComponent (a JSON Object) should be contained within the 'data' variable
    this.data = this.dataTransfer.getData(); 
    this.data_status = this.data.status;

    //The following line checks if you get an error from the API itself for whatever reason
    if(this.data_status === 'SUCCESS'){
      
      //Before we can turn the JSON object into the APIResponse variable, we must Type Guard the APIResponse variable so we know all the information is correct
      if(this.isApiResponse(this.data)) {
        
        //True: There are no Null values and all the values are what they need to be
        //The next step is to turn the JSON object into the api response variable
        //This is possible due to TypeScript's ability to map a TypeScript Object to a JSON Object just by setting them equal to each other
        this.APIResponse = this.data
      }
      else {
        
        // False: There are inconsistencies in the data that I am receiving
        alert('There are inconsistencies in the data recieved from the API')
      }
    }
    else {
      alert('Error recieved from the API')
    }
  }
}