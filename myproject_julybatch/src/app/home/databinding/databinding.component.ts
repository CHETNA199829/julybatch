import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
//DB(data binding):communication between a component and the DOM.
//Data binding can be either one-way data binding or two-way data binding.
// 1.One-way databinding :One way databinding is a simple one way communication where HTML template is changed when we make changes in TypeScript code.
//1.String Interpolation{{}}
//:String Interpolation is a one-way databinding technique which is used to display data from ts to view(templet/UI/dom) using curly braces
//2.Property Binding[]
//3.Event Binding()
//2. two way data binding [()]



data : any = "we are learning string interpolation";
amount :number = 9000000;
schoolName! : string;
isMatch=true;
x=7;
name ="poonam";
test(){
  return 50*2;
}

}
