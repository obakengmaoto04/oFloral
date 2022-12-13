// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { LogoComponent } from './components/logo/logo.component';
// import { MenuComponent } from './components/menu/menu.component';
// import { NavComponent } from './components/nav/nav.component';
// import { RegisterComponent } from './pages/register/register.component';
// import { LoginComponent } from './pages/login/login.component';
// import { HomeComponent } from './pages/home/home.component';



// @NgModule({
//   declarations: [
//     AppComponent,
//     FooterComponent,
//     LogoComponent,
//     MenuComponent,
//     NavComponent,
//     RegisterComponent,
//     LoginComponent,
//     HomeComponent,
//     NavComponent
//   ],
  
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
// import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { GuardService } from './service/guard.service';
import { AuthService } from './service/auth.service';
import { MenuComponent } from './components/menu/menu.component';
import { NavComponent } from './components/nav/nav.component';
import { AnnualsComponent } from './pages/annuals/annuals.component';


@NgModule({
  declarations: [
   AppComponent,
   FooterComponent,
   LogoComponent,
   MenuComponent,
   NavComponent,
   RegisterComponent,
   LoginComponent,
   AnnualsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path:'home',component:HomeComponent},
      {path:'nav',component:NavComponent}
    ]),
  ],
  providers: [GuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

