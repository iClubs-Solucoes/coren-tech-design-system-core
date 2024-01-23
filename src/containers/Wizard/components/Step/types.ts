import { ReactNode } from 'react';

export type StepProps = {
  preIcon?: ReactNode;
  name?: string;
  onClick?: () => void;
} & StepContainerStyleProps;

export type NameStyleProps = {
  currentStep: boolean;
};

export type NumberStyleProps = {
  currentStep: boolean;
};

export type StepContainerStyleProps = {
  currentStep?: boolean;
  disabled?: boolean;
};
