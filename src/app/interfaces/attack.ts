export interface Attack {
  _name: string;
  _attackBonus: number;
  _damageDie: string;
  _damageModifier: number;
  _damageType: string;
}

export interface MeleeAttack extends Attack{

}

export interface SpellAttack extends Attack {

}
