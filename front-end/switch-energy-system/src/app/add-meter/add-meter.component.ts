import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiUserService } from '../api-user.service';
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
  ngOnInit(): void {
  }
  openDialog()
  {
   this.api.addMeter(this.newMeter.value.userId,this.newMeter.value.providerName).subscribe((response) => {
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
        }).then((res) =>{
          if(res.isConfirmed)
          {
            
          }
        });
      }
   })
  }
}
