import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {CharacterImpl} from '../../classes/character-impl';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styles: []
})
export class OverviewComponent implements OnInit, OnDestroy {

  public character: CharacterImpl = null;

  constructor(public DS: DataService) {
    this.DS.character.subscribe(character => {
      this.character = character;
      console.log('Overview Subscription Value:');
      console.log(this.character);
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.DS.character.unsubscribe();
  }

  onClick() {
    this.character.character._level += 1;
    this.DS.postJSON(this.character.character);
  }

}
