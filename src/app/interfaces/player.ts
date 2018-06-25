import {Weapon} from "./weapon";
import {Armor} from "./armor";
import {BaseStat} from "./base-stat";
import {ChaStat, ConstStat, DexStat, IntStat, Stat, StrStat, WisStat} from "./stat";
import {MeleeAttack, SpellAttack} from "./attack";

export interface Player {
  _name: string;
  _playerName: string;
  _level: number;
  _class: string;
  _race: string;
  _background: string;
  _alignment: string;
  _passiveWisdom: number;
  _inspiration: number;
  _traits: {
    _personalityTraits: string[];
    _ideals: string[];
    _bonds: string[];
    _flaws: string[];
    _features: string[];
    _languages: string[];
    _proficiencies: string[];
  }
  _equipment: {
    _primaryWeapon: Weapon;
    _secondaryWeapon: Weapon;
    _headgear: Armor;
    _chestplate: Armor;
    _gauntlets: Armor;
    _jewelry: Armor;
    _boots: Armor;

  }

  _attacks: {
    _meleeAtk: MeleeAttack[];
    _spellAtk: SpellAttack[];
  }

  _defense: {
    _armorClass: number;
    _maximumHitPoints: number;
    _currentHitPoints: number;
    _temporaryHitPoints: number;
  }

  _movement: {
    _speed: number;
    _initiative: number;
  }

  _baseStats: {
    _proficiencyBonus: number;
    _str: BaseStat;
    _dex: BaseStat;
    _const: BaseStat;
    _int: BaseStat;
    _wis: BaseStat;
    _cha: BaseStat;
  }

  _savingThrows: {
    _str: StrStat;
    _dex: DexStat;
    _const: ConstStat;
    _int: IntStat;
    _wis: WisStat;
    _cha: ChaStat;
  }

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
  }
}
