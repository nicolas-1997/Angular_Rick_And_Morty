import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChDetailsComponent } from './ch-details.component';

const routes: Routes = [{ path: '', component: ChDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChDetailsRoutingModule { }
