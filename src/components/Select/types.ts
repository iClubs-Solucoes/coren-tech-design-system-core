import { ReactElement } from 'react';

export type SelectValues = {
  value: string;
  label: string;
}[];

export type SelectProps = {
  className?: string;
  values?: SelectValues[0];
  items?: SelectValues;
  disabled?: boolean;
  icon?: ReactElement;
  onChange?: (value: SelectValues[0]) => void;
};
