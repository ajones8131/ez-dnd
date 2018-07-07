import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(public DS: DataService) {
  }

  ngOnInit() {
  }

  clearCharacter() {
    this.DS.setCharacter(null);
  }

}
