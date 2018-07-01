import {BaseStat} from './base-stat';
import {ChaStat, ConstStat, DexStat, IntStat, StrStat, WisStat} from './stat';
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
    _str: StrStat;
    _dex: DexStat;
    _const: ConstStat;
    _int: IntStat;
    _wis: WisStat;
    _cha: ChaStat;
  };

  _stats: {
    _acrobatics: DexStat;
    _animalHandling: WisStat;
    _arcana: IntStat;
    _athletics: StrStat;
    _deception: ChaStat;
    _history: IntStat;
    _insight: WisStat;
    _intimidation: ChaStat;
    _investigation: IntStat;
    _medicine: WisStat;
    _nature: IntStat;
    _perception: WisStat;
    _performance: ChaStat;
    _persuasion: ChaStat;
    _religion: IntStat;
    _sleightOfHand: DexStat;
    _stealth: DexStat;
    _survival: WisStat;
  };
}
