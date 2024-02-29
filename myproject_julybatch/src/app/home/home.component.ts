import { Component } from '@angular/core';
import { Route, Router } from '@angular/router'; //import section
import { DataService } from '../data.service';

@Component({            //it is called component directive: meta data of component
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {      //component class : properties, costructor,lifecycle hooks,methods etc
                               //property section
         //let/var/const city = "pune"   variable (declaration + definition) in js
         city : string = "pune";   //property    
         surName : any ="988080" ;
         name : string ="poonam patil";
         name2! : string;
         name3 : any;
         pipes: boolean=false;
         date = "10/2/2023";
         date1 = new Date();

  
  constructor(private router: Router,private dataService : DataService){} // constructor section
  
ngOnInit(){
  this.dataService.userName = this.name;
  console.log("set",this.dataService.userName);
  
}




  //LH(lifecyle hooks), methods
  singUpcompo(){

    this.name3 = "OnSai";
    console.log("city>>",this.city);
    console.log("singupcomponet function calling");
    this.test();
    this.router.navigateByUrl("sigUp");
  }

  test(){
    console.log("test calling...");
    
  }
  directives(){
    this.router.navigateByUrl('directives')
  }

  purePipes(){
    this.pipes =true;
  }
}
