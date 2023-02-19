import { HttpErrorResponse } from '@angular/common/http';
import {Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiUserService } from '../api-user.service';
import { Identity } from '../identity';
import { LoginInfo } from '../login-info';
import { SmartMeterComponent } from '../smart-meter/smart-meter.component';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
  providers:[SmartMeterComponent]
})
export class LoginViewComponent implements OnInit {

  constructor(private api : ApiUserService,private router:Router,private meter : SmartMeterComponent  ) { }
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  loginDetails: LoginInfo = {userName:'',password:''}
  ngOnInit(): void {
  }
   toggle()
   { 
    this.loginDetails.userName = this.loginForm.value.userName;
    this.loginDetails.password = this.loginForm.value.password;
      this.api.login(this.loginDetails).subscribe((response) => {
        sessionStorage.setItem("token",response.token);
        sessionStorage.setItem("name",JSON.stringify(this.loginDetails.userName));
               this.router.navigate(['smart-meter']);
      },(error:HttpErrorResponse) => {
          const err = error;
         console.log(err.error);
      })
   }
}