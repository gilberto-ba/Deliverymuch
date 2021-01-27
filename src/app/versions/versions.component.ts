import { Component, OnInit } from '@angular/core';
import { VersionsService } from '../versions.service';

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.scss']
})
export class VersionsComponent implements OnInit {

  versions: any;
  name = "";
  public paginaAtual = 1

  constructor(private versionsService:VersionsService) { }

  ngOnInit() {
    this.versionsService.getVersions().subscribe( // subscribe espera um retorno do backend da API
      response => {
        this.versions = response
      }
    ) 
  }
  

}
