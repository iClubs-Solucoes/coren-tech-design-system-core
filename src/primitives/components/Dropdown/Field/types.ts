import { ReactElement } from 'react';

export type FieldProps = {
  children: ReactElement[] | ReactElement | string;
  className?: string;
  open?: boolean;
} & FieldStyleProps;

export type FieldStyleProps = {
  fieldTheme?: 'primary' | 'secondary' | 'third' | 'select' | 'field';
  disabled?: boolean;
  filled?: boolean;
};
