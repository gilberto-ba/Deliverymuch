import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VersionsService {

  PokeApiUrlGames = "https://pokeapi.co/api/v2/version/?limit=10000"

  // injetando o HttpClient
  constructor(private http: HttpClient) { }

  getVersions():Observable<any[]>{ 
    return this.http.get<any[]>(this.PokeApiUrlGames);
  }

}
