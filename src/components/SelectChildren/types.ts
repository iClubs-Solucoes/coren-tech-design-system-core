import { ReactElement } from 'react';

import { SearchProps } from 'primitives/components/Dropdown/Search/types';

export type Item = {
  value: string;
  label: string;
  children: ReactElement | string;
};

export type SelectedItem = {
  value: string;
  label: string;
};

export type SelectChildrenProps = {
  className?: string;
  selectedItem?: SelectedItem;
  items?: Item[];
  icon?: ReactElement;
  label?: string;
  placeholder?: string;
  search?: SearchProps;
  onChange?: (newSelectedItem: SelectedItem) => void;
  onOpeningDropdownChange?: (open: boolean) => void;
};
