import { Component, OnInit } from '@angular/core';
import { ApiUserService } from 'src/app/service/api-user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserInfo } from '../../../interfaces/user-info';
import Swal from 'sweetalert2'
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {

  constructor(private api:ApiUserService) { }

  ngOnInit(): void {
  }
  signUpForm = new FormGroup({
    userName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    phone:  new FormControl(null,[Validators.required, Validators.pattern('[0-9]*')]),
    password:  new FormControl('',[Validators.required, Validators.pattern('[A-Za-z0-9]*')]),
    })
    signUp : UserInfo = {userName:'',email:'',phone:0,password:''}
    createAdmin()
    {
        this.signUp.userName = this.signUpForm.value.userName;
        this.signUp.email=this.signUpForm.value.email;
        this.signUp.phone=this.signUpForm.value.phone;
        this.signUp.password=this.signUpForm.value.password;

      this.api.createAdmin(this.signUp).subscribe((response) => {
      }, (error: HttpErrorResponse) => {
        const err = error
        if(err.status == 200){
          Swal.fire({
            icon: 'success',
            title: "Account Created",
            text: 'Click to login!',
            confirmButtonText: 'OK',
            timer: 30000
          }).then((res) =>{});
        }
      })
    }
}
