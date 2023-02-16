import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './login-view/login-view.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { SmartMeterComponent } from './smart-meter/smart-meter.component'; 
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ProviderComponent } from './provider/provider.component';
import { AddMeterComponent } from './add-meter/add-meter.component';
import { CreateProviderComponent } from './create-provider/create-provider.component';
import { ViewReadingsComponent } from './view-readings/view-readings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    SignUpComponent,
    SmartMeterComponent,
    AdminViewComponent,
    ProviderComponent,
    AddMeterComponent,
    CreateProviderComponent,
    ViewReadingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    NgxPaginationModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
