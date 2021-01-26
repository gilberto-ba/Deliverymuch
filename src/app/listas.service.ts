import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  PokeApiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20000"

  constructor(private http: HttpClient) { }

  getListas():Observable<any[]>{ 
    return this.http.get<any[]>(this.PokeApiUrl);
  }

}
