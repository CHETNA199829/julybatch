import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { SigUpComponent } from './home/sig-up/sig-up.component';
import { DatabindingComponent } from './home/databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifecyclehooksComponent } from './home/lifecyclehooks/lifecyclehooks.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SubComponent } from './sub/sub.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { SignUpReactiveFormComponent } from './sign-up-reactive-form/sign-up-reactive-form.component';

const routes: Routes = [
  { path : '' , component : HomeComponent},
{ path : "login" , component : LoginComponent},
{path : "sigUp", component : SigUpComponent},
{path : "dataBinding", component : DatabindingComponent},
{path : "directives",component:DirectivesComponent},
{path : "lifecyclehooks", component: LifecyclehooksComponent},
{path : "Parent", component: ParentComponent},
{path : "child", component: ChildComponent},
{path : "subject", component:SubComponent },
{path : "subject1", component:Sub1Component },
{path : "subject2", component:Sub2Component },
{path : "templateForm", component:TemplatedrivenComponent},
{path : 'signUpForm', component:SignUpReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
