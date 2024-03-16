import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { SigUpComponent } from './home/sig-up/sig-up.component';
import { DatabindingComponent } from './home/databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { LifecyclehooksComponent } from './home/lifecyclehooks/lifecyclehooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SubComponent } from './sub/sub.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { SearchPipe } from './search.pipe';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { SignUpReactiveFormComponent } from './sign-up-reactive-form/sign-up-reactive-form.component';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { Viewchild1Component } from './viewchild1/viewchild1.component';
import { Viewchild2Component } from './viewchild2/viewchild2.component';
console.log("modulde calling...");



@NgModule({
  declarations: [    //component/pipe/directive
    AppComponent,
    HomeComponent,
    LoginComponent,
    SigUpComponent,
    DatabindingComponent,
    DirectivesComponent,
    LifecyclehooksComponent,
    ParentComponent,
    ChildComponent,
    SubComponent,
    Sub1Component,
    Sub2Component,
    SearchPipe,
    TemplatedrivenComponent,
    SignUpReactiveFormComponent,
    NumbersOnlyDirective,
    Viewchild1Component,
    Viewchild2Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
