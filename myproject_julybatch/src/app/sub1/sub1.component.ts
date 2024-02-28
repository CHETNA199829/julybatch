import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component {
datal:any;
constructor(private dataService : DataService){}

ngOnInit(){
  this.dataService.data.subscribe(res=>{
  this.datal = res;
  })
  console.log("this.data",this.datal);
}

getData(){
  console.log("this.datal",this.datal);
  
}
}
