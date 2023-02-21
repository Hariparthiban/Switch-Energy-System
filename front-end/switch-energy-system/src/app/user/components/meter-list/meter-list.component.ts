import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MeterDetails } from 'src/app/interfaces/meter-details';
import { ProviderDetails } from 'src/app/interfaces/provider-details';
import { ApiUserService } from 'src/app/service/api-user.service';

@Component({
  selector: 'app-meter-list',
  templateUrl: './meter-list.component.html',
  styleUrls: ['./meter-list.component.css']
})
export class MeterListComponent implements OnInit {

  constructor(private api : ApiUserService) { }
  page: number = 1;
  limit: number = 5;
  userMeterList: MeterDetails[] = [{
    smartMeterId: '',
    userId: '',
    connectionStatus: '',
    provider: {name:'',chargesConception:null}
  }]
  newMeter = new FormGroup({
   providerName : new FormControl(''),
   });
  providers : ProviderDetails[] = []
  ngOnInit(): void {
    this.api.viewUserMeters(sessionStorage.getItem("userId")).subscribe((response) => {
      this.userMeterList = response;
      console.log(response);
   })
   
   this.api.viewProvider().subscribe((response)=>{
    this.providers = response;
  })
  }
  makeSwitch(meterId:string|null|undefined)
  {
    this.api.switchProvider(meterId,this.newMeter.value.providerName).subscribe((response)=>{
      this.api.viewUserMeters(sessionStorage.getItem("userId")).subscribe((response) => {
        this.userMeterList = response;
        console.log(response);
     })
    })

    
  }
}
