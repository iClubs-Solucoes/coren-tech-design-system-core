import { ReactElement } from 'react';

export type SelectItemProps = {
  value?: string;
  icon?: ReactElement;
  label?: string;
  items?: string[];
  disabled?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
};

export type SelectItemStyleProps = {
  disabled?: boolean;
};
