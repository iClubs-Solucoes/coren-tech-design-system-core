import { ReactElement } from 'react';

export type ArrowProps = {
  icon?: ReactElement;
} & ArrowStyleProps;

export type ArrowStyleProps = {
  direction?: Directions;
  disabled?: boolean;
  open?: boolean;
};

export type Directions = 'top' | 'left' | 'bottom' | 'right';
