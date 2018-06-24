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
    personalityTraits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
    features: string[];
    languages: string[];
    proficiencies: string[];
  }
  _equipment: {
    primaryWeapon: Weapon;
    secondaryWeapon: Weapon;
    headgear: Armor;
    chestplate: Armor;
    gauntlets: Armor;
    jewelry: Armor;
    boots: Armor;

  }

  _attacks: {
    meleeAtk: MeleeAttack[];
    spellAtk: SpellAttack[];
  }

  _defense: {
    armorClass: number;
    maximumHitPoints: number;
    currentHitPoints: number;
    temporaryHitPoints: number;
  }

  _movement: {
    speed: number;
    initiative: number;
  }

  _baseStats: {
    proficiencyBonus: number;
    str: BaseStat;
    dex: BaseStat;
    const: BaseStat;
    int: BaseStat;
    wis: BaseStat;
    cha: BaseStat;
  }

  _savingThrows: {
    str: StrStat;
    dex: DexStat;
    const: ConstStat;
    int: IntStat;
    wis: WisStat;
    cha: ChaStat;
  }

  _stats: {
    Acrobatics: DexStat;
    AnimalHandling: WisStat;
    Arcana: IntStat;
    Athletics: StrStat;
    Deception: ChaStat;
    History: IntStat;
    Insight: WisStat;
    Intimidation: ChaStat;
    Investigation: IntStat;
    Medicine: WisStat;
    Nature: IntStat;
    Perception: WisStat;
    Performance: ChaStat;
    Persuasion: ChaStat;
    Religion: IntStat;
    SleightOfHand: DexStat;
    Stealth: DexStat;
    Survival: WisStat;
  }
}
