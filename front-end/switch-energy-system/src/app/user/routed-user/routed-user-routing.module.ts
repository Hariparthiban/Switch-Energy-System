import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartMeterComponent } from '../components/smart-meter/smart-meter.component';
const routes: Routes = [
    {
      path:'smart-meter',
      component:SmartMeterComponent
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutedUserRoutingModule { }
