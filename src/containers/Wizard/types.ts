import { ReactNode } from 'react';

export type Step = {
  preIcon?: ReactNode;
  name?: string;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export type WizardProps = {
  steps: Step[];
  onChangeStep?: () => void;
  onCancel?: () => void;
  onCompletion?: () => void;
};

export enum Steps {
  FIRST = 0,
}
