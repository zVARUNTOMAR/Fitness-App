import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'signup',component: SignupComponent},
  {path : 'login',component: LoginComponent},
  {path :'training',component: TrainingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
