import { Dispatch, KeyboardEvent, MouseEvent } from 'react';

import { FactoryOpts } from 'imask/esm/index';

export type InputProps = {
  type?: InputTypes;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  mask?: FactoryOpts;
  onChange?: (value: string) => void;
  onChangeUnmasked?: (value: string) => void;
  onClick?: (e: MouseEvent<Element>) => void;
  onKeyEnter?: (
    e: KeyboardEvent<HTMLInputElement>,
    setValue: Dispatch<string>,
  ) => void;
  onKeyDown?: (
    e: KeyboardEvent<HTMLInputElement>,
    setValue: Dispatch<string>,
  ) => void;
};

type InputTypes =
  | 'text'
  | 'password'
  | 'submit'
  | 'reset'
  | 'radio'
  | 'checkbox'
  | 'button'
  | 'file'
  | 'image'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'url'
  | 'week'
  | 'search'
  | 'tel'
  | 'time'
  | 'range';
