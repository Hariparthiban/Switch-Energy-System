import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SmartMeterComponent } from './smart-meter/smart-meter.component';

const routes: Routes = [
  {path:'login',component: LoginViewComponent },
  {path:'signup',component:SignUpComponent},
  {path:'smart-meter',component:SmartMeterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
