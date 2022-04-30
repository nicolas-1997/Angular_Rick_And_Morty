import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChListRoutingModule } from './ch-list-routing.module';
import { ChListComponent } from './ch-list.component';


@NgModule({
  declarations: [
    ChListComponent
  ],
  imports: [
    CommonModule,
    ChListRoutingModule
  ]
})
export class ChListModule { }
