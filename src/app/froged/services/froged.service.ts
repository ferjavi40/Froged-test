import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

import { Observable } from 'rxjs';
import { PeopleInterface } from '../interfaces/people.interface';

@Injectable({
  providedIn: 'root'
})
export class FrogedService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPeople():Observable<PeopleInterface[]>{
    return this.http.get<PeopleInterface[]>(`${this.baseUrl}/people/ `);
  }

}
