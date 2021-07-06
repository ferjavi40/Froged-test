import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { PeopleComponent } from './pages/people/people.component';
import { StarshipComponent } from './pages/starship/starship.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { FrogedRoutingModule } from './froged-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    PeopleComponent,
    StarshipComponent,
    PlanetsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FrogedRoutingModule
  ],
  exports:[
    HomeComponent,
    PeopleComponent,
    StarshipComponent,
    PlanetsComponent
  ]
})
export class FrogedModule { }
