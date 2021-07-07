import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { PeopleComponent } from './pages/people/people.component';
import { StarshipComponent } from './pages/starship/starship.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { AppRoutingModule } from '../app-routing.module';
import { IntroComponent } from './pages/intro/intro.component';
import { ComponentsModule } from '../components/components.module';




@NgModule({
  declarations: [
    HomeComponent,
    PeopleComponent,
    StarshipComponent,
    PlanetsComponent,
    IntroComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    ComponentsModule
  ],
  exports:[
    HomeComponent,
    PeopleComponent,
    StarshipComponent,
    PlanetsComponent,
    IntroComponent
  ]
})
export class FrogedModule { }
