import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // postApicall(endpoint: string) {
  //   throw new Error('Method not implemented.');
  // }
   userName:any;

   data = new Subject<any>();
   url='http://localhost:3000'
  
  constructor(private httpClient : HttpClient) { }


  postApicall(endPoint:any,formData:any){
  let url = this.url + '/' + endPoint
  return this.httpClient.post(url,formData)
}
}



// serivce : to declare global property, reusable function logic

