import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { character } from '@shared/models/characters.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http:HttpClient) { }

  urlBase = `${environment.urlBase}character`


  searchCharacter(query='', page=1){
    return this.http.get<character[]>(`${this.urlBase}/?name=${query}&page=${page}`)
  }
  getDetail(id:number){
    return this.http.get<character>(`${this.urlBase}/${id}`)
  }

  
}
