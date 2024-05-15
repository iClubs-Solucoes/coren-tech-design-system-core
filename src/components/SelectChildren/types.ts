import { ReactElement } from 'react';

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
  onChange?: (newSelectedItem: SelectedItem) => void;
  onOpeningDropdownChange?: (open: boolean) => void;
};
