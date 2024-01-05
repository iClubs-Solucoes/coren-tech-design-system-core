import { ReactElement } from 'react';

export type DropdownProps = {
  children: ReactElement[];
  onChange?: (value: boolean) => void;
  disabled?: boolean;
};
