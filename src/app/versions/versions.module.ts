import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionsComponent } from './versions.component';
import { VersionsRoutingModule } from './versions.routing.modules';



@NgModule({
  declarations: [VersionsComponent],
  imports: [
    CommonModule,
    VersionsRoutingModule
  ]
})
export class VersionsModule { }
