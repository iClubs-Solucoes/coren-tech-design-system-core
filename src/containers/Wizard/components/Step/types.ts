import { ReactNode } from 'react';

export type StepProps = {
  preIcon: ReactNode;
  name: string;
  onClick: () => void;
} & NameStyleProps;

export type NameStyleProps = {
  currentStep: boolean;
};

export type NumberStyleProps = {
  currentStep: boolean;
};
