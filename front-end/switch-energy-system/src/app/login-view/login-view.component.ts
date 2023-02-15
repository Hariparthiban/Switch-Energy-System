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
    phone: new FormControl(0),
    password: new FormControl(''),
  });
  loginDetails: LoginInfo = {phone:null,password:''}
  ngOnInit(): void {
  }
   toggle()
   { 
    this.loginDetails.phone = this.loginForm.value.phone;
    this.loginDetails.password = this.loginForm.value.password;
      this.api.login(this.loginDetails).subscribe((response) => {
      },(error:HttpErrorResponse) => {
          const err = error;
            if(err.status == 200)
            {
              sessionStorage.setItem("phoneNumber", JSON.stringify(this.loginDetails.phone))
               this.router.navigate(['smart-meter']);
            }
      })
   }
}