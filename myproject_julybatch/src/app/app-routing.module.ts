import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { SigUpComponent } from './home/sig-up/sig-up.component';
import { DatabindingComponent } from './home/databinding/databinding.component';

const routes: Routes = [
  { path : '' , component : HomeComponent},
{ path : "login" , component : LoginComponent},
{path : "sigUp", component : SigUpComponent},
{path : "dataBinding", component : DatabindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
