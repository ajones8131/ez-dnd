import {Injectable} from '@angular/core';
import {Character} from '../interfaces/character';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {CharacterImpl} from '../classes/character-impl';

@Injectable()
export class DataService {
  public character: Subject<CharacterImpl> = new BehaviorSubject<CharacterImpl>(null);

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.character.next(new CharacterImpl(data));
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('assets/saves/character.json');
  }

  public postJSON(newCharacter: Character) {
    this.http.post('/Users/aaronjones/_source/temp/character.json', newCharacter);
  }

  public setCharacter(characterImpl) {
    this.character.next(characterImpl);
  }

  getToken() {
    const body = new URLSearchParams();
    body.set('grant_type', 'urn:ibm:params:oauth:grant-type:apikey');
    body.set('api_key', 'BKw6DUScyGoJtQTnn2LVy9qBujI38W-lOArbvtDgE5T3');
    this.http.post();
  }
}
