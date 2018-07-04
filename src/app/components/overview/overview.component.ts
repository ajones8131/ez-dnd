import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {CharacterImpl} from '../../classes/character-impl';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styles: []
})
export class OverviewComponent implements OnInit {

  public character: CharacterImpl = null;
  public output1;
  public output2;
  constructor(public DS: DataService) {

  }

  ngOnInit() {
    this.DS.character.subscribe(character => {
      this.character = character;
      console.log('Overview Subscription Value:');
      console.log(this.character);
    });
  }

  onClick() {
    this.character.character._level += 1;
    this.DS.setCharacter(this.character);
  }

  doTheOtherThing() {
    console.log(this.DS.getCharacters().subscribe(res => {
      this.output2 = JSON.stringify(res);
    }));
  }

}
