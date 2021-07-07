import { Component, OnInit } from '@angular/core';

import { PlanetsInterface } from '../../interfaces/planet.interface';
import { FrogedService } from '../../services/froged.service';



@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets: PlanetsInterface [] = [];

  constructor(private _frogedService:FrogedService) { }

  ngOnInit(): void {

    this._frogedService.getPlanets()
        .subscribe((data:PlanetsInterface[])=>{
          this.planets = data['results'];
          console.log(this.planets)
        })
  }

  

}
