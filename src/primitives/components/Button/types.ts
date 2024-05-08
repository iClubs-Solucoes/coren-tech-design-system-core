import { MouseEventHandler, ReactElement, RefObject } from 'react';

export type ButtonProps = {
  className?: string;
  children?: string | ReactElement;
  buttonRef?: RefObject<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & ButtonStyleProps;

export type ButtonStyleProps = {
  type?: 'button' | 'submit' | 'reset';
  onlyIcon?: boolean;
  buttonTheme?: ButtonTheme;
  icon?: ReactElement;
  disabledBtn?: boolean;
  border?: boolean;
  loading?: boolean;
};

export type BulletsStyleProps = {
  bulletTheme?:
    | 'primary'
    | 'secondary'
    | 'third'
    | 'fourth'
    | 'fifth'
    | 'sixth';
};

export type ButtonTheme =
  | 'primary'
  | 'secondary'
  | 'third'
  | 'fourth'
  | 'fifth'
  | 'sixth';
