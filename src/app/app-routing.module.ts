import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './froged/pages/intro/intro.component';
import { PeopleComponent } from './froged/pages/people/people.component';
import { PlanetsComponent } from './froged/pages/planets/planets.component';
import { StarshipComponent } from './froged/pages/starship/starship.component';

const routes: Routes = [
  { path: 'intro', component: IntroComponent, pathMatch: 'full' },
  { path: 'people', component: PeopleComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'starship', component: StarshipComponent },
  { path: '**', redirectTo: 'intro' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
