import { formatPercent } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent {



  submit(form:any){
    console.log("form obj", form.value);
    
  }

 
}


