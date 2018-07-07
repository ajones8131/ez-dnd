import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-click-input',
  templateUrl: './click-edit.component.html',
  styles: [],
  animations: [
    trigger('editState', [
      state('inactive', style({
        borderColor: 'transparent',
        transform: 'scaleX(.01)'
      })),
      state('active', style({
        borderColor: 'white',
        transform: 'scaleX(1)'
      })),
      transition('inactive => active', animate('150ms ease-in')),
      transition('active => inactive', animate('150ms ease-out'))
    ])
  ]
})
export class ClickEditComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() enter = new EventEmitter();
  @Output() dblclick = new EventEmitter();
  @Input() value = '';
  @Input() spellCheck = 'false';
  @Input() multiline = false;

  @ViewChild('valueDiv') valueDiv: ElementRef;
  public edit = false;
  public activeState = 'inactive';

  constructor() {
  }

  ngOnInit() {
  }

  onEnter(event) {
    if (!this.multiline) {
      event.preventDefault();
    }
    this.valueDiv.nativeElement.blur();
    this.enter.emit();
  }

  onBlur(event, newValue) {
    this.valueChange.emit(newValue);
    this.blur.emit();
    this.edit = false;
    this.activeState = 'inactive';
  }

  onFocus() {
    this.edit = true;
    this.activeState = 'active';
    this.valueDiv.nativeElement.focus();
  }

  onDblClick() {
    this.dblclick.emit();
  }

  innertext() {
    return this.value;
  }

  clearValue() {
    this.value = '';
  }
}
