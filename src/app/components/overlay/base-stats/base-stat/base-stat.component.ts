import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseStat} from '../../../../interfaces/base-stat';

@Component({
  selector: 'app-base-stat',
  templateUrl: './base-stat.component.html',
  styles: []
})
export class BaseStatComponent implements OnInit {

  @Output() statChange = new EventEmitter();
  @Input() stat: BaseStat;

  constructor() {
  }

  ngOnInit() {
  }

  onInput() {
    console.log(this.stat);
  }

  onBlur() {
    this.statChange.emit(this.stat);
    console.log('emitted');
    console.log(this.stat);
  }

}
