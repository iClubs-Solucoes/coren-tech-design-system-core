import { CSSProperties, MouseEventHandler, ReactElement } from 'react';

import { Directions } from '../Arrow/types';

export type MenuProps = {
  open?: boolean;
  children: ReactElement[] | ReactElement | string;
  itemUpList?: ReactElement[] | ReactElement | string;
  onMouseEnter?: MouseEventHandler<Element>;
  onCloseDropdown?: (value: boolean) => void;
  onMouseLeave?: MouseEventHandler<Element>;
  style?: CSSProperties;
} & MenuStyleProps;

export type MenuStyleProps = {
  coordinates?: DOMRect;
  direction?: Directions;
  adjust?: Adjust;
};

export type Adjust = {
  left: number;
  top: number;
};
