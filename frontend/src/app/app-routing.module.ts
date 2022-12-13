import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { GuardService } from './service/guard.service';
import { AnnualsComponent } from './pages/annuals/annuals.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: 'register', component: RegisterComponent },
  {path:'home',component:HomeComponent},
  {path:'annuals',component:AnnualsComponent},
  // canActivate:[GuardService]

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export class AppComponent {
  
  constructor() {}

}