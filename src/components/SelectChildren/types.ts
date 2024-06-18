import { ReactElement } from 'react';

import { CSSProperties } from 'dynamic-styled-components';
import { SearchProps } from 'primitives/components/Dropdown/Search/types';

export type Item = {
  value: string;
  label: string;
  children?: ReactElement | string;
};

export type SelectedItem = {
  value: string;
  label: string;
};

export type SelectChildrenProps<T extends SelectedItem = SelectedItem> = {
  className?: string;
  selectedItem?: T;
  items?: Item[];
  icon?: ReactElement;
  label?: string;
  placeholder?: string;
  search?: SearchProps;
  menuStyle?: CSSProperties;
  onChange?: (newSelectedItem: T) => void;
  onOpeningDropdownChange?: (open: boolean) => void;
};

export type MenuStyleProps = {
  field?: HTMLDivElement | null;
};
