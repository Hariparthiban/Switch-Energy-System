import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutedUserRoutingModule } from './routed-user-routing.module';
import { SmartMeterComponent } from '../components/smart-meter/smart-meter.component'
import { AddMeterComponent } from '../components/add-meter/add-meter.component'
import { ProviderComponent } from '../components/provider/provider.component'
import { MaterialModule } from 'src/app/material/material.module';
import { ViewReadingsComponent } from '../components/view-readings/view-readings.component';
import { MeterListComponent } from 'src/app/user/components/meter-list/meter-list.component';
@NgModule({
  declarations: [
    SmartMeterComponent,
    AddMeterComponent,
    ViewReadingsComponent,
    MeterListComponent,  
    ProviderComponent],
  imports: [
    CommonModule,
    RoutedUserRoutingModule,
    MaterialModule
  ]
})
export class RoutedUserModule { }
