import { ReactElement } from 'react';

export type DropdownMenuProps = {
  children: ReactElement[];
  onChange?: (value: boolean) => void;
  disabled?: boolean;
};
