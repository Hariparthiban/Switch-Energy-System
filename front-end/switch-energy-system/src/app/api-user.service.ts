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
  userIdentity : Identity = { id:'',userName:'',email:'',phone:null,password:'',role:''}
  baseUrl = "http://localhost:8080/user";
  meterUrl = "http://localhost:8080/smartMeter/"
  
    login(data:LoginInfo):Observable<String>
    {
       return this.http.get<String>(`${this.baseUrl}/${data.phone}/${data.password}/login`);
    }
    create(data:UserInfo):Observable<string>
    {
       return this.http.post<string>(`${this.baseUrl}/enroll`,data);
    }
    view():Observable<MeterDetails[]>
    {
      return this.http.get<MeterDetails[]>(`${this.meterUrl}allMeters`);
    }
    enable(id:string|null|undefined )
    {
      return this.http.get(`${this.meterUrl}enable/${id}`);
    }
    disable(id:string|null|undefined)
    {
      return this.http.get(`${this.meterUrl}disable/${id}`);
    }
    getUser(phone: string | null):Observable<Identity>
    {
      console.log(phone);
       return this.http.get<Identity>(`${this.baseUrl}/get/${phone}`);
    }
    getMeter(meterId: string | null | undefined):Observable<MeterDetails>
    {
       return this.http.get<MeterDetails>(`${this.meterUrl}view-meter/${meterId}`);
    }
}
