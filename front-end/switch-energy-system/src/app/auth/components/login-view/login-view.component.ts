import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiUserService } from 'src/app/service/api-user.service';
import Swal from 'sweetalert2';
import { LoginInfo } from '../../../interfaces/login-info';
import { SmartMeterComponent } from '../../../user/components/smart-meter/smart-meter.component';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
  providers: [SmartMeterComponent]
})
export class LoginViewComponent implements OnInit {

  constructor(private api: ApiUserService, private router: Router, private meter: SmartMeterComponent) { }
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
    password: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9]*')]),
  });
  loginDetails: LoginInfo = { userName: '', password: '' }
  ngOnInit(): void {
  }
  toggle() {
    this.loginDetails.userName = this.loginForm.value.userName;
    this.loginDetails.password = this.loginForm.value.password;
    this.api.login(this.loginDetails).subscribe((response) => {
      sessionStorage.setItem("token", response.token);
      sessionStorage.setItem("name", JSON.stringify(this.loginDetails.userName));

      this.api.getRoles(this.loginDetails.userName).subscribe((response) => {
        if (response.email == 'abc@admin.com' )
        this.router.navigate(['view-admin']);
        else
        this.router.navigate(['smart-meter']);
      })
    }, (error: HttpErrorResponse) => {
      const err = error;
      Swal.fire({
        icon: 'error',
        title: 'Invalid Credentials',
        text: 'UserName or Password may be Incorrect',
        confirmButtonText: 'OK',
        timer: 30000
      }).then((res) => { });
    })
  }
}