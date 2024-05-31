import { ReactNode } from 'react';

export type Step = {
  preIcon?: ReactNode;
  name?: string;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

type ShouldGoToNextStep = boolean;

type SyncOnChangeStep<T> = (
  currentStepIndex: T,
  newStepIndex: T,
) => ShouldGoToNextStep | void;

type AsyncOnChangeStep<T> = (
  currentStepIndex: T,
  newStepIndex: T,
) => Promise<ShouldGoToNextStep | void>;

export type WizardProps<T extends number = number> = {
  className?: string;
  steps: Step[];
  continueLoading?: boolean;
  disableContinue?: boolean;
  onChangeStep?: SyncOnChangeStep<T> | AsyncOnChangeStep<T>;
  onCancel?: () => void;
  onCompletion?: () => void;
};

export enum Steps {
  FIRST = 0,
}
