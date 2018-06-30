import {Metadata} from './metadata';

export interface Attack extends Metadata{
  _attackBonus: number;
  _damageDie: string;
  _damageModifier: number;
  _damageType: string;
}

export interface MeleeAttack extends Attack{
  _value: number;
}

export interface SpellAttack extends Attack {
  _value: number;
}
