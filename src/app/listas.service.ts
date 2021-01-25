import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  PokeApiUrl = "https://pokeapi.co/api/v2/pokemon/?offset=1&limit=10000"
  //PokeApiUrl = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getListas():Observable<any[]>{ // cria metodo
    return this.http.get<any[]>(this.PokeApiUrl); // Consome o serviço da API do PokeApi
  }

}
