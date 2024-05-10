import { ReactNode } from 'react';

export type VerticalLinkProps = {
  className?: string;
  linkText?: 'e' | 'ou';
  childrens: ChildrenToLink[];
};

export type ChildrenToLink = {
  id: string;
  children: ReactNode;
};

export type LinkedChildrenStyleProps = {
  havePredecessor: boolean;
  haveSuccessor: boolean;
};

export type LinkTextStyleProps = {
  children: string;
};
