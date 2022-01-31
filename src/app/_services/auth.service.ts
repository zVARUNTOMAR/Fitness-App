import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from '../_models/auth-data,model';
import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authChange = new Subject<boolean>();

  private user!: User;

  constructor(private router : Router) { }

  registerUser(authData : AuthData){
    this.user = {
      email : authData.email,
      userId : Math.round((Math.random()*1000)).toString()
    }
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }

  login(authData : AuthData){
    this.user = {
      email : authData.email,
      userId : Math.round((Math.random()*1000)).toString()
    }
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }

  logout(){
     this.user = null as any;
     this.authChange.next(false);
     this.router.navigate(['/']);
  }

  getUser(){
    return {...this.user};
  }

  isAuth(){
    return this.user !=null;
  }
}
