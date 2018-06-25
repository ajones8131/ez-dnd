import { Injectable } from '@angular/core';
import {Player} from "../interfaces/player";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";

@Injectable()
export class DataService {
  public character: Subject<Player> = new BehaviorSubject<Player>(null);

  constructor() { }

  public setCharacter(character) {
    this.character.next(character);
  }
}
