import { Component, OnInit } from '@angular/core';
import { ProviderDetails } from '../../../interfaces/provider-details';
import { ApiUserService } from '../../../service/api-user.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  constructor(private api : ApiUserService) { }
   providers : ProviderDetails[] = []
    ngOnInit(): void {
    this.api.viewProvider().subscribe((response) => {
       this.providers = response;
    })
  }

}
