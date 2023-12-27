import { ReactElement } from 'react';

import { Directions } from 'models';

export type ArrowProps = {
  icon?: ReactElement;
} & ArrowStyleProps;

export type ArrowStyleProps = {
  direction?: Directions;
  open?: boolean;
};
