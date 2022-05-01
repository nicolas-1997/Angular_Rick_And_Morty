import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { ChDetailsComponent } from '@characters/ch-details/ch-details.component';
import { ChListComponent } from '@characters/ch-list/ch-list.component';
import { characterComponent } from '@characters/characters.components';

const components = [ ChDetailsComponent, ChListComponent, characterComponent]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule
  ],
  exports:[...components]
})
export class CharactersModule { }
