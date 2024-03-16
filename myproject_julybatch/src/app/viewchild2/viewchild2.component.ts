import { Component, ViewChild } from '@angular/core';
import { Viewchild1Component } from '../viewchild1/viewchild1.component';

@Component({
  selector: 'app-viewchild2',
  templateUrl: './viewchild2.component.html',
  styleUrls: ['./viewchild2.component.css']
})
export class Viewchild2Component {
 name = "poonam";
 city :any;

//  setValue(){
//   console.log(name);
  
//  }
}
