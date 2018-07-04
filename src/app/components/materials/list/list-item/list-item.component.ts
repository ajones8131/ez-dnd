import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styles: []
})
export class ListItemComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  @Input() value;
  @Input() proficiencyBonus;

  constructor() {
  }

  ngOnInit() {
  }

}
