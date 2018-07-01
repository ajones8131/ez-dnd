import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {CharacterImpl} from '../../../classes/character-impl';

@Component({
  selector: 'app-base-stats',
  templateUrl: './base-stats.component.html',
  styles: []
})
export class BaseStatsComponent implements OnInit {
  public character: CharacterImpl;
  public baseStats = ['_str', '_dex', '_const', '_int', '_wis', '_cha'];

  constructor(public DS: DataService) {
    DS.character.subscribe(character => {
      this.character = character;
    });
  }

  ngOnInit() {
  }

  onChange(baseStat) {
    console.log(this.baseStats);
  }

}
