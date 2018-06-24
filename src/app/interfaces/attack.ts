export interface Attack {
  name: string;
  attackBonus: number;
  damageDie: string;
  damageModifier: number;
  damageType: string;
}

export interface MeleeAttack extends Attack{

}

export interface SpellAttack extends Attack {

}
