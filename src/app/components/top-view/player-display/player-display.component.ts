import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {CharacterImpl} from '../../../classes/character-impl';

@Component({
  selector: 'app-player-display',
  templateUrl: './player-display.component.html',
  styles: []
})
export class PlayerDisplayComponent implements OnInit, OnDestroy {

  public character: CharacterImpl = null;

  constructor(public DS: DataService) {
    DS.character.subscribe(character => {
      this.character = character;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.DS.character.unsubscribe();
  }

}
