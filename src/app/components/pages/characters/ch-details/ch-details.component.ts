import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Observable, take } from 'rxjs';
import { character } from '@shared/models/characters.model';
import { CharacterService } from '@app/shared/services/character.service';

@Component({
  selector: 'app-ch-details',
  templateUrl: './ch-details.component.html',
  styleUrls: ['./ch-details.component.scss'],
})
export class ChDetailsComponent implements OnInit {
  character$: Observable<character | any>;

  constructor(
    private activeRouter: ActivatedRoute,
    private characterSrv: CharacterService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.activeRouter.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];

      this.character$ = this.characterSrv.getDetail(id);
    });
  }

  back() {
    this.location.back();
  }
}
