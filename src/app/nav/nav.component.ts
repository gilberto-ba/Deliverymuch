import { Component, OnInit } from '@angular/core';
import {MenuItem, PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  private items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'File',
      items: [
          {label: 'New', icon: PrimeIcons.PLUS},
          {label: 'Open', icon: PrimeIcons.DOWNLOAD}
      ]
    },
    {
        label: 'Edit',
        items: [
            {label: 'Undo', icon: PrimeIcons.REFRESH}
        ]
    }];
  }

}
