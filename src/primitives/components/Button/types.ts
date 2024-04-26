import { MouseEventHandler, ReactElement } from 'react';

export type ButtonProps = {
  className?: string;
  children?: string | ReactElement;
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
  bulletTheme?: 'primary' | 'secondary' | 'third' | 'fourth' | 'fifth';
};

export type ButtonTheme =
  | 'primary'
  | 'secondary'
  | 'third'
  | 'fourth'
  | 'fifth';
