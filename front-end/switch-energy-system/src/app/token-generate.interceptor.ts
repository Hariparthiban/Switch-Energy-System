import { Injectable,Injector } from '@angular/core';
import { ApiUserService } from './api-user.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenGenerateInterceptor implements HttpInterceptor {

  constructor(private injection : Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url === 'http://localhost:8080/user/authenticate' || request.url === 'http://localhost:8080/user/enroll')
    {
      let tokenRequester =  request.clone({
        setHeaders :{ 
          Authorization : ``
        }
      })
      return next.handle(tokenRequester)
    }
    else {        
      let  tokenRequester = request.clone({
          setHeaders: {
              Authorization: `Bearer ${sessionStorage.getItem('token')}`
          }
        })
        return next.handle(tokenRequester);
  }
}
  }

