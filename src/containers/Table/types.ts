import { ReactNode } from 'react';

export type TableProps = {
  children: ReactNode;
  className?: string;
} & TableStyleProps;

export type TableStyleProps = {
  scroll?: boolean | string;
};
