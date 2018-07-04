import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styles: []
})
export class ListItemComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Input() value;
  @Input() proficiencyBonus;

  constructor() {
  }

  ngOnInit() {
  }

  calculateValue() {
    let res = Number.parseInt(this.value._value);
    if (this.value._proficiency === 'true') {
      res += Number.parseInt(this.proficiencyBonus);
    }
  }

}
