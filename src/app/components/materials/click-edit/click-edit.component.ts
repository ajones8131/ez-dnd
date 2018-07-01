import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-click-input',
  templateUrl: './click-edit.component.html',
  styles: []
})
export class ClickEditComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  @Input() value = '';
  @Input() spellCheck = 'false';

  @ViewChild('valueDiv') valueDiv: ElementRef;
  public edit = false;

  constructor() {
  }

  ngOnInit() {
  }

  onBlur(newValue) {
    if (newValue !== this.value) {
      this.value = newValue;
      this.valueChange.emit(this.value);
    }
    this.edit = false;
  }

  onFocus() {
    this.edit = true;
  }
}
