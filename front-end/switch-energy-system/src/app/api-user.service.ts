import { Injectable, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInfo } from './login-info';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInfo } from './user-info';
import { MeterDetails } from './meter-details';
import { Identity } from './identity';
import { ProviderDetails } from './provider-details';
import { Token } from '@angular/compiler';
import { Respond } from './respond';
@Injectable({
  providedIn: 'root',
})
export class ApiUserService {
 
  constructor(private http : HttpClient) { }
  userIdentity : Identity = { id:'',userName:'',email:'',phone:null,password:'',role:''}
  baseUrl = "http://localhost:8080/user";
  meterUrl = "http://localhost:8080/smartMeter/"
  providerUrl = "http://localhost:8080/providers/"

    login(data:LoginInfo):Observable<Respond>
    {
       return this.http.post<Respond>(`${this.baseUrl}/authenticate`,data);
    }
    create(data:UserInfo):Observable<void>
    {
       return this.http.post<void>(`${this.baseUrl}/enroll`,data);
    }
    view():Observable<MeterDetails[]>
    {
      return this.http.get<MeterDetails[]>(`${this.meterUrl}allMeters`);
    }
    enable(id:string|null|undefined )
    {
      return this.http.put(`${this.meterUrl}enable/${id}`,null);
    }
    disable(id:string|null|undefined)
    {
      return this.http.put(`${this.meterUrl}disable/${id}`,null);
    }
    getUser(userName: string | null):Observable<Identity>
    {
       return this.http.get<Identity>(`${this.baseUrl}/get/${userName}`);
    }
    getMeter(meterId: string | null | undefined):Observable<MeterDetails>
    {
       return this.http.get<MeterDetails>(`${this.meterUrl}view-meter/${meterId}`);
    }
    addMeter(userId: string | null | undefined,name:string | null | undefined):Observable<object>
    {
       return this.http.post<object>(`${this.meterUrl}addmeter/${userId}/${name}`,null);
    }
    
    createProvider(provider : object):Observable<String>
    {
      return this.http.post<string>(`${this.providerUrl}create`,provider);
    }
    viewProvider():Observable<ProviderDetails[]>
    {
      return this.http.get<ProviderDetails[]>(`${this.providerUrl}get-providers`);
    }
}
