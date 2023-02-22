import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { ProviderDetails } from 'src/app/interfaces/provider-details';
import { ApiUserService } from 'src/app/service/api-user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-meter',
  templateUrl: './add-meter.component.html',
  styleUrls: ['./add-meter.component.css']
})
export class AddMeterComponent implements OnInit {

  constructor(private api  : ApiUserService) { }
   
  newMeter = new FormGroup({
   userId : new FormControl(''),
  providerName : new FormControl(''),
  });

  providers : ProviderDetails[] = []
  ngOnInit(): void {
    
    this.api.viewProvider().subscribe((response)=>{
      this.providers = response;
    })
  }
  openDialog()
  {
   this.api.addMeter(sessionStorage.getItem('userId'),this.newMeter.value.providerName).subscribe((response) => {
   },(error:HttpErrorResponse) => {
      const err = error
      if(err.status == 200)
      {
        Swal.fire({
          icon: 'success',
          title: 'Request - Info',
          text: 'Your Request Under Admin View',
          confirmButtonText: 'OK',
          timer: 8000
        }).then((res) =>{});
      }
   })
  }
}
