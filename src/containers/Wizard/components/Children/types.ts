import { ReactNode } from 'react';

export type ChildrenProps = {
  children: ReactNode;
} & ChildrenContainerStyleProps;

export type ChildrenContainerStyleProps = {
  currentChildren: boolean;
};
