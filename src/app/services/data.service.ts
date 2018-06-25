import { Injectable } from '@angular/core';
import {Player} from "../interfaces/player";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataService {
  public character: Subject<Player> = new BehaviorSubject<Player>(null);

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.character.next(data);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('assets/character.json');
  }

  public postJSON(newCharacter:Player) {
    this.http.post('assets/character.json', newCharacter);
  }

  public setCharacter(character) {
    this.character.next(character);
  }
}
