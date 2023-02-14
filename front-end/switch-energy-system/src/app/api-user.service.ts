import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInfo } from './login-info';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInfo } from './user-info';
import { MeterDetails } from './meter-details';
import { Identity } from './identity';
@Injectable({
  providedIn: 'root',
})
export class ApiUserService {
 
  constructor(private http : HttpClient) { }
  userIdentity : Identity = { userId:'',name:'',email:'',phone:'',password:'',role:''}
  baseUrl = "http://localhost:8080/user";
  meterUrl = "http://localhost:8080/smartMeter/"
    login(data:LoginInfo):Observable<Identity>
    {
       return this.http.get<Identity>(`${this.baseUrl}/${data.phone}/${data.password}/login`);
    }
    create(data:UserInfo):Observable<string>
    {
       return this.http.post<string>(`${this.baseUrl}/enroll`,data);
    }
    view(id:string|null|undefined):Observable<MeterDetails[]>
    {
      console.log(id);
      return this.http.get<MeterDetails[]>(`${this.meterUrl}userMeterList/${id}`);
    }
}
