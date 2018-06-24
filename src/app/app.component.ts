import {Component} from '@angular/core';
import {Player} from './interfaces/player';
import {player} from './mocks/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  playerDisplay: Player = player;
}
