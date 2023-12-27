import { ReactNode } from 'react';

export type TableCellProps = {
  children?: ReactNode;
  className?: string;
  title?: string;
} & TableCellStyleProps;

export type TableCellStyleProps = {
  align?: 'start' | 'center' | 'end';
  text?: boolean;
};
