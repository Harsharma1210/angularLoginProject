import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //root means the service is available throughout the entire application
})
export class DataService {
  private apiUrl = 'https://chbusdemo.callhealth.com/gcm/customerLogin';

  constructor(private http: HttpClient) { } //The constructor function initializes the HttpClient service

  sendData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return this.http.post<any>(this.apiUrl, data, { headers });
  }
}

//The following is another injectable for the purpose of transfering data from one page to another
@Injectable({
  providedIn: 'root'
})
export class DataTransfer {
  private data: string = '';

  setData(data: string){
    this.data = data;
    console.log("We have set the data.");
  }

  getData(){
    return this.data;
  }
}