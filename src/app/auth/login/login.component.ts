import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  onLogin(form : NgForm){
    this.authService.login({
      email: form.value.email,
      password: form.value.password
    })
  }
}
