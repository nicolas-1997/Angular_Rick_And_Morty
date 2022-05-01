import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChDetailsRoutingModule } from './ch-details-routing.module';
import { ChDetailsComponent } from './ch-details.component';


@NgModule({
  declarations: [
    // ChDetailsComponent
  ],
  imports: [
    CommonModule,
    ChDetailsRoutingModule
  ]
})
export class ChDetailsModule { }
