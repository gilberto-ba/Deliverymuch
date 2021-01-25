import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas.component';
import { ListasRoutingModule } from './listas.routing.modules';



@NgModule({
  declarations: [ListasComponent],
  imports: [
    CommonModule,
    ListasRoutingModule
  ]
})
export class ListasModule { }
