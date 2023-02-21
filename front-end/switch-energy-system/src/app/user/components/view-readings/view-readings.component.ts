import { Component, OnInit } from '@angular/core';
import { MeterDetails } from 'src/app/interfaces/meter-details';
import { Readings } from 'src/app/interfaces/readings';
import { ApiUserService } from 'src/app/service/api-user.service';

@Component({
  selector: 'app-view-readings',
  templateUrl: './view-readings.component.html',
  styleUrls: ['./view-readings.component.css']
})
export class ViewReadingsComponent implements OnInit {
  meterReadings:Readings = {
    meterId: '',
    amount: 0,
    unitsConsumed: 0
  }
  constructor(private api :ApiUserService) { }
  ngOnInit(): void {
    this.api.showReadings(sessionStorage.getItem("meterId")).subscribe((response) => {
       this.meterReadings = response;
       console.log(response);
    })
  }
   
}
