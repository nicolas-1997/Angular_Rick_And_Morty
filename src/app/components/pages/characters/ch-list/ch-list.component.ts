import { Component, HostListener, OnInit, Inject } from '@angular/core';
import {ActivatedRoute, NavigationEnd, ParamMap, Params, Router} from '@angular/router'
import { character, RequestInfo } from '@app/shared/models/characters.model';
import { CharacterService } from '@app/shared/services/character.service';
import { take, filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-ch-list',
  templateUrl: './ch-list.component.html',
  styleUrls: ['./ch-list.component.scss']
})
export class ChListComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document:Document,
    private characterService:CharacterService, 
    private route:ActivatedRoute, 
    private router:Router) {
      this.urlChange()
   }

  characters:character[] = [];

  private pageNum = 1;
  private query:string = '';
  private hidenScroll:number = 200
  private showScroll:number = 500
  showGoUpButton = false;
  info:RequestInfo = {
    next:null
  }

  ngOnInit(): void {
    this.getCharacterQuery()
  }

  @HostListener('window:scroll', [])
  onWindowScroll():void {
    const yOffSet = window.pageYOffset;
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScroll) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hidenScroll) {
      this.showGoUpButton = false;
    }
  }
  scrollDown(){
    if (this.info.next) {
      this.pageNum++;
      this.getDataService();
    }
  }

  scrollUp(){
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }

  private urlChange(){
    this.router.events.pipe(
      filter(( event ) => event instanceof NavigationEnd)).subscribe(
        () => {
          this.characters = []
          this.pageNum = 1
          this.getCharacterQuery()
        }
      )
  }

  private getCharacterQuery(){
    this.route.queryParams.pipe(take(1)).subscribe(
      (params: Params) => {
        this.query = params['q'];
        this.getDataService()
      }
    )
  }
  private getDataService():void{
    this.characterService.searchCharacter(this.query, this.pageNum).pipe(
      take(1)
    ).subscribe(
      (response:any) => {
        if(response?.results?.length){
          const {info, results} = response
          this.characters = [...this.characters, ...results]
          this.info = info
        }
        else{
          this.characters = []
        }
      }
    )
  }
}
