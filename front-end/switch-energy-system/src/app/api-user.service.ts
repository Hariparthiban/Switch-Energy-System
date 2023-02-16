import { Injectable, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInfo } from './login-info';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInfo } from './user-info';
import { MeterDetails } from './meter-details';
import { Identity } from './identity';
import { ProviderDetails } from './provider-details';
@Injectable({
  providedIn: 'root',
})
export class ApiUserService {
 
  constructor(private http : HttpClient) { }
  userIdentity : Identity = { id:'',userName:'',email:'',phone:null,password:'',role:''}
  baseUrl = "http://localhost:8080/user";
  meterUrl = "http://localhost:8080/smartMeter/"
  providerUrl = "http://localhost:8080/providers/"
  
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
      return this.http.put(`${this.meterUrl}enable/${id}`,null);
    }
    disable(id:string|null|undefined)
    {
      return this.http.put(`${this.meterUrl}disable/${id}`,null);
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
