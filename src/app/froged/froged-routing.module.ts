import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PeopleComponent } from './pages/people/people.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { StarshipComponent } from './pages/starship/starship.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      {
        path: 'people',
        component: PeopleComponent
      },
      {
        path: 'planets',
        component: PlanetsComponent
      },
      {
        path: 'starship',
        component: StarshipComponent
      },

    ]
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrogedRoutingModule { }
