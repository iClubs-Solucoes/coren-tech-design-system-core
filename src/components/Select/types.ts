import { CSSProperties, ReactElement } from 'react';

export type SelectValue = {
  value: string;
  label: string;
};

export type SelectValues = SelectValue[];

export type SelectProps = {
  className?: string;
  selectTheme?: SelectTheme;
  values?: SelectValue;
  items?: SelectValues;
  disabled?: boolean;
  icon?: ReactElement;
  menuStyle?: CSSProperties;
  filled?: boolean;
  onChange?: (value: SelectValue) => void;
  onOpeningDropdownChange?: (open: boolean) => void;
};

export type SelectTheme = 'primary' | 'secondary';
