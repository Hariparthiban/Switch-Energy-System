import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module') .then(m => m.AdminModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/routed-user/routed-user.module') .then(m => m.RoutedUserModule)
  },
  {
    path:' ',
    loadChildren: () => import('./auth/auth.module') .then(m => m.AuthModule)
    
  }
  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
