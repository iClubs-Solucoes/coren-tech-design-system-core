import { ReactElement } from 'react';

export type SelectItemsProps = {
  values?: string[];
  icon?: ReactElement;
  label?: string;
  items?: string[];
  disabled?: boolean;
  placeholder?: string;
  onChange?: (value: string[]) => void;
};
