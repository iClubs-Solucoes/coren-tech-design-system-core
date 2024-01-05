import { ReactNode } from 'react';

export interface TableHeaderRowProps extends TableHeaderRowStylesProps {
  children: ReactNode;
  className?: string;
  displayLine?: boolean;
}

export interface TableHeaderRowStylesProps {
  gridSystem?: string;
}
