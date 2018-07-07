import {Metadata} from './metadata';

export interface Stat extends Metadata {
  _value: number;
  _proficiency: boolean;
  _customModifier: number;
  _baseStat: string;
}
