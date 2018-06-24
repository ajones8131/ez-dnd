import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../../interfaces/player';

@Component({
  selector: 'app-player-display',
  templateUrl: './player-display.component.html',
  styleUrls: ['./player-display.component.css']
})
export class PlayerDisplayComponent implements OnInit {

  @Input() player: Player = null;
  constructor() { }

  ngOnInit() {
  }

}
