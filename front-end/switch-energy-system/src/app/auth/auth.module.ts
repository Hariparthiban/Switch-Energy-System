import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProviderComponent } from './components/provider/provider.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [LoginViewComponent,SignUpComponent,ProviderComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
