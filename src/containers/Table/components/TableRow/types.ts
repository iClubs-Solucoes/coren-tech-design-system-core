import { ReactNode } from 'react';

export type TableRowProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
} & TableRowsStyleProps;

export type TableRowsStyleProps = {
  gridSystem?: string;
  index?: number;
};
