import { MouseEventHandler, ReactElement } from 'react';

export type ButtonProps = {
  className?: string;
  children?: string | ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & ButtonStyleProps;

export type ButtonStyleProps = {
  type?: 'button' | 'submit' | 'reset';
  onlyIcon?: boolean;
  buttonTheme?: 'primary' | 'secondary' | 'third' | 'fourth' | 'fifth';
  icon?: ReactElement;
  disabledBtn?: boolean;
  border?: boolean;
  loading?: boolean;
};

export type BulletsStyleProps = {
  bulletTheme?: 'primary' | 'secondary' | 'third' | 'fourth' | 'fifth';
};
