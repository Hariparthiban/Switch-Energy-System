import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  constructor() { }
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  ngOnInit(): void {
  }

}
