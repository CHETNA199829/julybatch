import { Component } from '@angular/core';
import { Route, Router } from '@angular/router'; //import section

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
         name : string ="poonam";
         name2! : string;
         name3 : any;

  
  constructor(private router: Router){} // constructor section
  
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
}
