import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Player} from '../../../interfaces/player';
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit, OnChanges {

  @Input() player: Player = null;

  constructor(public DS: DataService) {

  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.DS.setCharacter(this.player);
  }

}
