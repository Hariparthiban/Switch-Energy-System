import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiUserService } from '../api-user.service';
import { MeterDetails } from '../meter-details';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  constructor(private api: ApiUserService) { }
  page: number = 1;
  limit: number = 5;
  meterList: MeterDetails[] = []
  ngOnInit(): void {
    this.api.view().subscribe((response) => {
      this.meterList = response;
      console.log(response);
      console.log(this.meterList);
    })
  }

  enable(id: string | null | undefined) {
    this.api.enable(id).subscribe((response) => {
      console.log(response);
    }, (error: HttpErrorResponse) => {
      const err = error;
       this.api.view().subscribe((response) => {
      this.meterList = response;
    })
    })
  }

  disable(id: string | null | undefined) {
    this.api.disable(id).subscribe((response) => {
      console.log(response);
    }, (error: HttpErrorResponse) => {
      const err = error;
      this.api.view().subscribe((response) => {
        this.meterList = response;
      })
    })
  }
}