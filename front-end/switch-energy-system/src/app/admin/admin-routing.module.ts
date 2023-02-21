import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { LoginViewComponent } from '../auth/components/login-view/login-view.component';

const routes: Routes = [
  {
    path: 'view-admin',
    component: AdminViewComponent
  },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
})
export class AdminRoutingModule { }
