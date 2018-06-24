import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../../interfaces/player';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  @Input() player: Player = null;

  constructor() {
  }

  ngOnInit() {
    console.log(this.player);
  }

}
