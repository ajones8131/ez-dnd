import {BaseStat} from "./base-stat";

export interface Stat {
  _name: string;
  _value: number;
  _proficiency: boolean;
  _customModifier: number;
  _baseStat: BaseStat;
}

export interface StrStat extends Stat {}
export interface DexStat extends Stat {}
export interface ConstStat extends Stat {}
export interface IntStat extends Stat {}
export interface WisStat extends Stat {}
export interface ChaStat extends Stat {}
