import { ReactElement } from 'react';

export type SelectItemsProps = {
  value?: string[];
  icon?: ReactElement;
  label?: string;
  items?: string[];
  disabled?: boolean;
  placeholder?: string;
  onChange?: (value: string[]) => void;
};
