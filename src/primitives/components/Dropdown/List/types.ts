import { CSSProperties, ReactElement } from 'react';

export type ListProps = {
  open?: boolean;
  children: ReactElement[] | ReactElement | string;
  onCloseDropdown?: (value: boolean) => void;
  style?: CSSProperties;
};

export type Adjust = {
  left: number;
  top: number;
};
