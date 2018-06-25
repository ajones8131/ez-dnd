import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Player} from '../../../interfaces/player';
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-player-display',
  templateUrl: './player-display.component.html',
  styles: []
})
export class PlayerDisplayComponent implements OnInit, OnDestroy {

  public character: Player = null;

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
