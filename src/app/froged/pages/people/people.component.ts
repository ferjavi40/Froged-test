import { Component, OnInit } from '@angular/core';


import { PeopleInterface } from '../../interfaces/people.interface';
import { FrogedService } from '../../services/froged.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: PeopleInterface [] = [];

  constructor(private _frogedService:FrogedService) { }

  ngOnInit(): void {

    this._frogedService.getPeople()
        .subscribe((data:PeopleInterface[])=>{
          this.people = data['results'];
        })
  }

}
