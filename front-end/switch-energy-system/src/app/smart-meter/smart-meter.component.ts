import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUserService } from '../api-user.service';
import { Identity } from '../identity';
import { MeterDetails } from '../meter-details';
@Component({
  selector: 'app-smart-meter',
  templateUrl: './smart-meter.component.html',
  styleUrls: ['./smart-meter.component.css'],
})
export class SmartMeterComponent implements OnInit {

  constructor(private api: ApiUserService ,private router : Router) { }
  page: number = 1;
  limit: number = 5;
  userData : Identity = { userId:'',name:'',email:'',phone:'',password:'',role:''}
  meterList : MeterDetails[] = [{meterId:'',userId:'',provider:{name:'',charges:0},connection:''}]
  ngOnInit(): void {
    
  }

  view()
  {
    console.log(this.userData.userId);
    this.api.view(this.userData.userId).subscribe((response) => {
      this.meterList = response;
      this.router.navigate(['smart-meter']);
  })
  }
}
