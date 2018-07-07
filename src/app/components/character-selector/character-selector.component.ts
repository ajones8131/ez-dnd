import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from '../../services/data.service';
import {CharacterImpl} from '../../classes/character-impl';
import {Character} from '../../interfaces/character';

@Component({
  selector: 'app-character-selector',
  templateUrl: './character-selector.component.html',
  styleUrls: ['./character-selector.component.css']
})
export class CharacterSelectorComponent implements OnInit {

  @Output() onSelection = new EventEmitter();
  characters = [];
  newCharacter = '';
  clicked = false;

  constructor(public DS: DataService) {
  }

  ngOnInit() {
    this.DS.getCharacters().subscribe((res) => {
      this.characters = res['files'].map((x: string) => {
        return x.replace('.json', '');
      });
    });
  }

  loadCharacter(character, isNew) {
    this.DS.getCharacter(character).subscribe((res: Character) => {
      if (isNew) {
        res._displayName = this.newCharacter;
      }
      this.DS.setCharacter(new CharacterImpl(res));
    });
  }

  setClicked() {
    this.clicked = true;
  }

  removeClicked(newCharacter) {
    this.newCharacter = newCharacter;
  }
}
