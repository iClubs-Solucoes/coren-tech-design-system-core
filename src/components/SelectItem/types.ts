import { ReactElement } from 'react';

export type SelectItemProps = {
  className?: string;
  value?: string;
  icon?: ReactElement;
  label?: string;
  items?: string[];
  disabled?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
  onClick?: () => void;
};

export type SelectItemStyleProps = {
  disabled?: boolean;
};
