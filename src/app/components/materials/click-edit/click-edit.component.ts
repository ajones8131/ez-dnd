import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-click-input',
  templateUrl: './click-edit.component.html',
  styles: []
})
export class ClickEditComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  @Input() value = '';
  @Input() spellCheck = 'false';
  @Input() multiline = false;

  @ViewChild('valueDiv') valueDiv: ElementRef;
  public edit = false;

  constructor() {
  }

  ngOnInit() {
  }

  onBlur(event, newValue, enter) {
    if ((enter && !this.multiline) || !enter) {
      if (enter && !this.multiline) {
        event.preventDefault();
      }
      if (newValue !== this.value) {
        this.value = newValue;
        this.valueChange.emit(this.value);
      }
      this.valueDiv.nativeElement.blur();
      this.edit = false;
    }
  }

  onFocus() {
    this.edit = true;
    this.valueDiv.nativeElement.focus();
  }
}
