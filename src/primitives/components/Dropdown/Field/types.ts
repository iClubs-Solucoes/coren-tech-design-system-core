import { ReactElement, RefObject } from 'react';

export type FieldProps = {
  children: ReactElement[] | ReactElement | string;
  className?: string;
  open?: boolean;
  fieldRef?: RefObject<HTMLDivElement>;
} & FieldStyleProps;

export type FieldStyleProps = {
  fieldTheme?: 'primary' | 'secondary' | 'third' | 'select' | 'field';
  disabled?: boolean;
  filled?: boolean;
};
