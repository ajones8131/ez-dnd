import {Metadata} from './metadata';

export interface BaseStat extends Metadata{
  _value: number;
  _modifier: number;
  _customModifier: number;
}
