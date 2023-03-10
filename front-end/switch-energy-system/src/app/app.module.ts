import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { TokenGenerateInterceptor } from './token-generate.interceptor';
import { ApiUserService } from './service/api-user.service';
import { MaterialModule } from './material/material.module';
import { RoutedUserModule } from './user/routed-user/routed-user.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
     RoutedUserModule,
       AdminModule,
       AuthModule
  ],
  providers: [
    ApiUserService,
    {provide: HTTP_INTERCEPTORS,
    useClass: TokenGenerateInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
