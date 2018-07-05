import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {CharacterImpl} from '../../../classes/character-impl';

@Component({
  selector: 'app-player-display',
  templateUrl: './player-display.component.html',
  styles: []
})
export class PlayerDisplayComponent implements OnInit {

  public character: CharacterImpl = null;

  constructor(public DS: DataService) {

  }

  ngOnInit() {
    this.DS.character.subscribe(character => {
      this.character = character;
    });
  }

  onBlur() {
    this.DS.setCharacter(this.character);
  }

}
