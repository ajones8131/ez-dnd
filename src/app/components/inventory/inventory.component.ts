import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {CharacterImpl} from '../../classes/character-impl';
import {ClickEditComponent} from '../materials/click-edit/click-edit.component';

@Component({
  selector: 'app-attributes',
  templateUrl: './inventory.component.html',
  styles: []
})
export class InventoryComponent implements OnInit {

  @ViewChild('newItemInput') newItemInput: ClickEditComponent;
  public character: CharacterImpl;
  public newItem = '';

  constructor(public DS: DataService) {
    this.DS.character.subscribe(res => {
      this.character = res;
    });
  }

  ngOnInit() {
  }

  onChange(newValue) {
    this.newItem = newValue;
  }

  createItem() {
    if (!this.newItem || this.newItem === '') {
      return;
    }
    this.character.character._items.unshift({
      _name: this.newItem.trim(),
      _value: 0,
      _description: ''
    });
    this.DS.setCharacter(this.character);
    this.newItemInput.clearValue();
    this.newItemInput.clearValue();
    this.newItem = '';
  }

  saveItem() {
    this.DS.setCharacter(this.character);
  }

  deleteItem(item, index) {
    this.character.character._items.splice(index, 1);
    this.DS.setCharacter(this.character);
  }

}
