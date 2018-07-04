import {Component} from '@angular/core';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  isDataLoaded = false;
  constructor(public DS: DataService) {
    DS.character.subscribe(res => {
      if (!!res) {
        this.isDataLoaded = true;
      }
    });
  }
}
