import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListasComponent } from './listas/listas.component';
import { EstadosComponent } from './estados/estados.component';


const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"home", component: HomeComponent },
  { path:"listas", component: ListasComponent },
  { path:"estados", component: EstadosComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
