import { Component, OnInit } from '@angular/core';

import { PlanetsInterface } from '../../interfaces/planet.interface';
import { FrogedService } from '../../services/froged.service';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets: PlanetsInterface [] = [];
  textPlanet: string = 'Planet'

  constructor(private _frogedService:FrogedService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this._frogedService.getPlanets()
        .subscribe((data:PlanetsInterface[])=>{
          this.planets = data['results'];
          this.spinner.hide();
        })
  }

  

}
