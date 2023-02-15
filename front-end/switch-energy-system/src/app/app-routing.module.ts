import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SmartMeterComponent } from './smart-meter/smart-meter.component';

const routes: Routes = [
  {path:'login',component: LoginViewComponent },
  {path:'signup',component:SignUpComponent},
  {path:'smart-meter',component:SmartMeterComponent},
  {path:'admin',component:AdminViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
