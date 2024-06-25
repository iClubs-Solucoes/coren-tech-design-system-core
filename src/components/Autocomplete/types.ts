import { CSSProperties, ReactElement } from 'react';

export interface ComputedItems {
  searchable: ReactElement[];
  notSearchable: ReactElement[];
}

export interface Item {
  children: ReactElement;
  searchable?: boolean;
}

export interface AutocompleteProps {
  className?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  menuStyle?: CSSProperties;
  items?: Item[];
  onChange?: (value: string) => void;
}

export interface MenuStyleProps {
  field: HTMLDivElement | null;
}
