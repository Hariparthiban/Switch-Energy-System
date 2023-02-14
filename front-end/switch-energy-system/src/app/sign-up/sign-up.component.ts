import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiUserService } from '../api-user.service';
import { UserInfo } from '../user-info';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private api : ApiUserService,private router : Router) { }

  ngOnInit(): void {
  }
  signUpForm = new FormGroup({
    userName: new FormControl('',),
    email: new FormControl(''),
    phone:  new FormControl(''),
    password:  new FormControl(''),
    })
    signUp : UserInfo = {userName:'',email:'',phone:'',password:''}
    sign()
    {
        this.signUp.userName = this.signUpForm.value.userName;
        this.signUp.email=this.signUpForm.value.email;
        this.signUp.phone=this.signUpForm.value.phone;
        this.signUp.password=this.signUpForm.value.password;

      this.api.create(this.signUp).subscribe((response) => {
      }, (error: HttpErrorResponse) => {
        const err = error
        if(err.status == 200)
        {
          Swal.fire({
            icon: 'success',
            title: 'Account Created',
            text: 'Click to login!',
            confirmButtonText: 'OK',
            timer: 8000
          }).then((res) =>{
            if(res.isConfirmed)
            {
              this.router.navigate(['login']);
            }
          });
        }
      })
    }
}
