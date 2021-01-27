import { Component, OnInit } from '@angular/core';
import { ListasService } from '../listas.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent implements OnInit {

  listas: any;
  name = "";
  public paginaAtual = 1

  constructor(private listasService:ListasService) { }

  ngOnInit() {
    this.listasService.getListas().subscribe( // subscribe espera um retorno do backend da API
      response => {
        this.listas = response
      }
    ) 
  }
  

}
