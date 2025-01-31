import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private apiUrl="https://cat-fact.herokuapp.com"
  constructor(private http:HttpClient) { }

  getCatFacts():Observable<any>{
   return this.http.get<any[]>(`${this.apiUrl}/facts`)
  }
}
