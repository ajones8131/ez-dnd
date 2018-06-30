import {Metadata} from './metadata';

export interface Item extends Metadata {
  _value: number;
  _description: string;
}
