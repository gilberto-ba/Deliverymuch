import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  //url = "https://pokeapi.co/api/v2/pokemon/"
  url = "http://servicodados.ibge.gov.br/api/v1/localidades/estados"

  constructor(private http: HttpClient) { }

  getEstados():Observable<any[]>{
    return this.http.get<any[]>(this.url); // Consome o serviço da API do IBGE
  }

}
