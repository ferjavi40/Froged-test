import { Component, OnInit } from '@angular/core';

import { VehiclesInterface } from '../../interfaces/vehicles.interface';
import { FrogedService } from '../../services/froged.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  starship: VehiclesInterface [] = [];
  textStarship: string ="Starship name"

  constructor(private _frogedService:FrogedService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this._frogedService.getVehicles()
        .subscribe((data:VehiclesInterface[])=>{
          this.starship= data['results'];
          this.spinner.hide();
        })

  }

}
