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
  @Input() baseStats;

  constructor() {
  }

  ngOnInit() {
  }

  calculateValue() {
    let ret = Number.parseInt(this.value._value) + Number.parseInt(this.baseStats[this.value._baseStat]._modifier);
    if (this.hasProficiency()) {
      ret += Number.parseInt(this.proficiencyBonus);
    }
    return ret;
  }

  onBlur(value) {
    this.value._value = Number.parseInt(value) - Number.parseInt(this.baseStats[this.value._baseStat]._modifier);
    if (this.hasProficiency()) {
      this.value._value -= Number.parseInt(this.proficiencyBonus);
    }
    this.onValueChange();
  }

  onValueChange() {
    this.blur.emit();
    this.valueChange.emit(this.value);
  }

  setProficiency() {
    this.value._proficiency = !this.hasProficiency();
  }

  hasProficiency() {
    return this.value._proficiency === true;
  }

}
