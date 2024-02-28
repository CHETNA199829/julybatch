import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   userName:any;

   data = new Subject<any>();
  
  constructor() { }
}



// serivce : to declare global property, reusable function logic

