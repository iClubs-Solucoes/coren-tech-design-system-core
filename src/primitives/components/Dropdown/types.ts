import { ReactElement } from 'react';

export type RootProps = {
  children: ReactElement[];
  onChange?: (value: boolean) => void;
  disabled?: boolean;
};
