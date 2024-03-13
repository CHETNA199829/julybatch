import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-reactive-form',
  templateUrl: './sign-up-reactive-form.component.html',
  styleUrls: ['./sign-up-reactive-form.component.css']
})
export class SignUpReactiveFormComponent {
signUpForm! : FormGroup;
show:boolean=false;
// show:boolean=true;
showPassword :boolean=false;

constructor(private formBuilder: FormBuilder){}

ngOnInit(){
  this.formLoad()
}
formLoad(){
  this.signUpForm = this.formBuilder.group({
    name : ['',[Validators.required]],
    mobile : ['',[Validators.maxLength(10)]],
    pancard : ['',[Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$'),Validators.maxLength(10)]],
    email : [''],
    pass : [''],
    confpass : [''],
    city:["",[this.spacesNotAllowed]]

  })
}

spacesNotAllowed(control:any){

  const value =control.value;
  console.log("value",value);
  //check if the value contains consecutive spaces
  let isIncludeSpace = /\s{2,}/.test(value)
  return isIncludeSpace ? { spacesNotAllowed: true} : null;
 
 // console.log("isIncludeSpacea",isIncludeSpace);
  
 //value.toLowercase().incluees("clone") // to show err when clone word get enterd
  
}



submit(){
  console.log(this.signUpForm.value);
  
}

toShowPassword(){
// this.showPassword= true;
// this.show=true
this.showPassword = !this.showPassword;
this.show =!this.show
}
}
