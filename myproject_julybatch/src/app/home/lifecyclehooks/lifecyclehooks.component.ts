import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent {

name:any;
 @Input() surName:any; //input property

constructor(private dataService : DataService){
  console.log("constructor calling..");
}


//A component instance has a lifecycle that starts
// when Angular instantiates the component class and renders the component view and its child views.
//ngOnChange() : if componet is having @input bound property then ngOnchnage life cycle hook get triger first
//ngOnInit() :
//ngDochec():
//ngAfterContentInit():
//ngOnDestroy():
//ngAfterContentChecked():
//ngAfterViewChecked():
//ngAfterViewInit() :
ngOnChanges(){
  console.log("onchange calling");
}
ngOnInit(){
  this.name = this.dataService.userName;
  console.log("oninit calling");
}
ngDocheck(){
  console.log("do check calling");
}
ngAfterContentInit(){
  console.log("conten init calling");
}
ngAfterContentChecked(){
  console.log("contentCheck calling");
}
ngAfterViewInit(){
  console.log("ngAfterViewInit calling");
}
ngAfterViewChecked(){
  console.log("ngAfterViewChecked calling");
}
ngOnDestroy(){
  console.log("ngOnDestro calling");
}
}

