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
    phone: new FormControl(''),
    password: new FormControl(''),
  });
 
  loginDetails: LoginInfo={phone:'',password:''}

  ngOnInit(): void {
  }
   toggle()
   {
    this.loginDetails.password = this.loginForm.value.password;
    this.loginDetails.phone = this.loginForm.value.phone;
    this.api.login(this.loginDetails).subscribe((response) => {
       this.meter.userData = response;
       this.meter.view();
    }, (error: HttpErrorResponse) => {
      const err = error
    })
   }
}