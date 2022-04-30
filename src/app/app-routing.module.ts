import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }, { path: 'ch-list', loadChildren: () => import('./components/pages/characters/ch-list/ch-list.module').then(m => m.ChListModule) }, { path: 'ch-details', loadChildren: () => import('./components/pages/characters/ch-details/ch-details.module').then(m => m.ChDetailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
