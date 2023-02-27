import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInfo } from '../interfaces/login-info';
import { Observable } from 'rxjs';
import { UserInfo } from '../interfaces/user-info';
import { MeterDetails } from '../interfaces/meter-details';
import { Identity } from '../interfaces/identity';
import { ProviderDetails } from '../interfaces/provider-details';
import { Respond } from '../interfaces/respond';
import { Readings } from '../interfaces/readings';

@Injectable({
  providedIn: 'root',
})
export class ApiUserService {

  constructor(private http: HttpClient) { }
  userIdentity: Identity = { id: '', userName: '', email: '', phone: null, password: '', role: '' }
  baseUrl = "http://localhost:8080/user";
  meterUrl = "http://localhost:8080/smartMeter/"
  providerUrl = "http://localhost:8080/providers/"

  login(data: LoginInfo): Observable<Respond> {
    return this.http.post<Respond>(`${this.baseUrl}/authenticate`, data);
  }

  createUser(data: UserInfo): Observable<Respond> {
    return this.http.post<Respond>(`${this.baseUrl}/enroll`, data);
  }

  createAdmin(data: UserInfo): Observable<Respond> {
    return this.http.post<Respond>(`${this.baseUrl}/enroll-admin`, data);
  }
  getRoles(name: string | null | undefined): Observable<Respond> {
    return this.http.get<Respond>(`${this.baseUrl}/role/${name}`);
  }

  viewListOfMeters(): Observable<MeterDetails[]> {
    return this.http.get<MeterDetails[]>(`${this.meterUrl}allMeters`);
  }

  enableMeter(id: string | null | undefined) {
    return this.http.put(`${this.meterUrl}enable/${id}`, null);
  }

  disableMeter(id: string | null | undefined) {
    return this.http.put(`${this.meterUrl}disable/${id}`, null);
  }
  getUser(userName: string | null): Observable<Identity> {
    return this.http.get<Identity>(`${this.baseUrl}/get/${userName}`);
  }

  getMeter(meterId: string | null | undefined): Observable<MeterDetails> {
    return this.http.get<MeterDetails>(`${this.meterUrl}view-meter/${meterId}`);
  }

  addMeter(userId: string | null | undefined, name: string | null | undefined): Observable<object> {
    return this.http.put<object>(`${this.meterUrl}addmeter/${userId}/${name}`, null);
  }
  createProvider(provider: object): Observable<String> {
    return this.http.post<string>(`${this.providerUrl}create`, provider);
  }

  viewProvider(): Observable<ProviderDetails[]> {
    return this.http.get<ProviderDetails[]>(`${this.providerUrl}get-providers`);
  }

  viewUserMeters(userName: string | null | undefined): Observable<MeterDetails[]> {
    return this.http.get<MeterDetails[]>(`${this.meterUrl}userMeterList/${userName}`);
  }

  showReadings(meterId: string | null | undefined): Observable<Readings> {
    return this.http.get<Readings>(`${this.meterUrl}Readings/${meterId}`);
  }

  switchProvider(meterId: string | null | undefined, providerName: string | null | undefined): Observable<void> {
    return this.http.put<void>(`${this.providerUrl}${meterId}/${providerName}/make-switch`, null);
  }

}
