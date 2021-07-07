import { Component, OnInit } from '@angular/core';

import { VehiclesInterface } from '../../interfaces/vehicles.interface';
import { FrogedService } from '../../services/froged.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  starship: VehiclesInterface [] = [];
  textStarship: string ="Starship name"

  constructor(private _frogedService:FrogedService) { }

  ngOnInit(): void {

    this._frogedService.getVehicles()
        .subscribe((data:VehiclesInterface[])=>{
          this.starship= data['results'];
        })

  }

}
