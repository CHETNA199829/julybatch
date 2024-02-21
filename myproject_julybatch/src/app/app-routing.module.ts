import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { SigUpComponent } from './home/sig-up/sig-up.component';
import { DatabindingComponent } from './home/databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  { path : '' , component : HomeComponent},
{ path : "login" , component : LoginComponent},
{path : "sigUp", component : SigUpComponent},
{path : "dataBinding", component : DatabindingComponent},
{path : "directives",component:DirectivesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
