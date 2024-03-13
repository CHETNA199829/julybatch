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
    confpass : ['']

  })
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
