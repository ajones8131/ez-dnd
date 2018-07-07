import {Injectable} from '@angular/core';
import {Character} from '../interfaces/character';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CharacterImpl} from '../classes/character-impl';
import {environment} from '../../environments/environment';

@Injectable()
export class DataService {
  public character: Subject<CharacterImpl> = new BehaviorSubject<CharacterImpl>(null);

  constructor(private http: HttpClient) {
    // this.getJSON('character').subscribe(data => {
    //   this.character.next(new CharacterImpl(data));
    // });
  }

  public getCharacter(character): Observable<any> {
    return this.http.get(`${environment.apiurl}/${character}.json`);
  }

  private postJSON(newCharacter: Character) {
    console.log('posting');
    console.log(newCharacter);
    console.log(environment.apiurl);
    return this.http.post(environment.apiurl, JSON.stringify(newCharacter), {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    })
      .subscribe(res => {
        console.log(res);
      });
  }

  public setCharacter(characterImpl: CharacterImpl) {
    if (!!characterImpl && !!characterImpl.character._displayName && characterImpl.character._displayName !== '') {
      this.postJSON(characterImpl.character);
    }
    this.character.next(characterImpl);
  }

  getCharacters() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.get(environment.apiurl, httpOptions);
  }
}
