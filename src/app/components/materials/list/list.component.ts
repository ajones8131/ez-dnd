import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Input() value: object = null;
  @Input() baseStats;
  @Input() proficiencyBonus;

  public items;

  constructor() {
  }

  ngOnInit() {
    this.items = Object.keys(this.value);
    console.log(this.items);
  }

  onBlur() {
    console.log(this.value);
    this.valueChange.emit(this.value);
  }

}
