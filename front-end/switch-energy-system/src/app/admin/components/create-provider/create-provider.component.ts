import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiUserService } from 'src/app/service/api-user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-provider',
  templateUrl: './create-provider.component.html',
  styleUrls: ['./create-provider.component.css']
})
export class CreateProviderComponent implements OnInit {

  constructor(private api: ApiUserService,) { }
   
  providerForm = new FormGroup({
    name : new FormControl(''),
    chargesConception : new FormControl(''),
   });

  ngOnInit(): void {
  }
  openDialog()
  {
   this.api.createProvider(this.providerForm.value).subscribe((response) => {
   },(error:HttpErrorResponse) => {
      const err = error
      if(err.status == 200)
      {
        Swal.fire({
          icon: 'success',
          title: 'Request - Info',
          text: 'Added Successfully',
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