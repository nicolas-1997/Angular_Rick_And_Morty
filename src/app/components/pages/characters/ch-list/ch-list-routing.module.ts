import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChListComponent } from './ch-list.component';

const routes: Routes = [{ path: '', component: ChListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChListRoutingModule { }
