import {BaseStat} from './base-stat';
import {Stat} from './stat';
import {MeleeAttack, SpellAttack} from './attack';
import {Metadata} from './metadata';
import {Item} from './item';

export interface Character extends Metadata {
  img: string;
  _level: number;
  _class: string;
  _race: string;
  _background: string;
  _alignment: string;
  _passiveWisdom: number;
  _inspiration: number;
  _proficiencyBonus: number;
  _traits: {
    _personalityTraits: Metadata[];
    _ideals: Metadata[];
    _bonds: Metadata[];
    _flaws: Metadata[];
    _features: Metadata[];
    _languages: Metadata[];
    _proficiencies: Metadata[];
  };

  _items: Item[];

  _money: {
    _cp: Item;
    _sp: Item;
    _ep: Item;
    _gp: Item;
    _pp: Item;
  };

  _attacks: {
    _meleeAtk: MeleeAttack[];
    _spellAtk: SpellAttack[];
    _spellSlots: Item;
  };

  _defense: {
    _armorClass: number;
    _maximumHitPoints: number;
    _currentHitPoints: number;
    _temporaryHitPoints: number;
  };

  _movement: {
    _speed: number;
    _initiative: number;
  };

  _baseStats: {
    _str: BaseStat;
    _dex: BaseStat;
    _const: BaseStat;
    _int: BaseStat;
    _wis: BaseStat;
    _cha: BaseStat;
  };

  _savingThrows: {
    _str: Stat;
    _dex: Stat;
    _const: Stat;
    _int: Stat;
    _wis: Stat;
    _cha: Stat;
  };

  _stats: {
    _acrobatics: Stat;
    _animalHandling: Stat;
    _arcana: Stat;
    _athletics: Stat;
    _deception: Stat;
    _history: Stat;
    _insight: Stat;
    _intimidation: Stat;
    _investigation: Stat;
    _medicine: Stat;
    _nature: Stat;
    _perception: Stat;
    _performance: Stat;
    _persuasion: Stat;
    _religion: Stat;
    _sleightOfHand: Stat;
    _stealth: Stat;
    _survival: Stat;
  };
}
