import { MouseEventHandler, ReactElement } from 'react';

export type TriggerProps = {
  children: ReactElement | string;
  open?: boolean;
  hover?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<Element>;
  onMouseEnter?: MouseEventHandler<Element>;
  onMouseLeave?: MouseEventHandler<Element>;
};
