import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Player} from "../../interfaces/player";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, OnDestroy {

  public character:Player = null;

  constructor(public DS: DataService) {
    this.DS.character.subscribe(character => {
      this.character = character;
      console.log('Overview Subscription Value:');
      console.log(this.character);
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.DS.character.unsubscribe();
  }

}
