import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfo } from '../../../interfaces/user-info';
import Swal from 'sweetalert2'
import { ApiUserService } from 'src/app/service/api-user.service';
import { Respond } from 'src/app/interfaces/respond';
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
    userName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    phone:  new FormControl(null,[Validators.required, Validators.pattern('[0-9]*')]),
    password:  new FormControl('',[Validators.required, Validators.pattern('[A-Za-z0-9]*')]),
    })
    signUp : UserInfo = {userName:'',email:'',phone:0,password:''}
    respond : Respond = {
      token: '',
      id: '',
      role: ''
    };
    sign()
    {
        this.signUp.userName = this.signUpForm.value.userName;
        this.signUp.email=this.signUpForm.value.email;
        this.signUp.phone=this.signUpForm.value.phone;
        this.signUp.password=this.signUpForm.value.password;

      this.api.create(this.signUp).subscribe((response) => {
        this.respond = response;
          Swal.fire({
            icon: 'success',
            title: "Account Created",
            text: 'Click to login!',
            confirmButtonText: 'OK',
            timer: 30000
          }).then((res) =>{
            if(res.isConfirmed)
            { 
              this.api.defaultMeter(this.respond.id).subscribe((response) =>{},
              (error:HttpErrorResponse) => {})
              this.router.navigate(['login']);
            }
          });
      }, (error: HttpErrorResponse) => {
        const err = error
       
      })
    }
}
