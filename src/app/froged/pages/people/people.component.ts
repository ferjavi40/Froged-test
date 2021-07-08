import { Component, OnInit } from '@angular/core';


import { PeopleInterface } from '../../interfaces/people.interface';
import { FrogedService } from '../../services/froged.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: PeopleInterface[] = [];
  textPeople: string = 'Name'

  constructor(private _frogedService: FrogedService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this._frogedService.getPeople()
      .subscribe((data: PeopleInterface[]) => {
        this.people = data['results'];
        this.spinner.hide();

      })
  }

}
