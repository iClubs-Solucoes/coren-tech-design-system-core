import { ReactNode } from 'react';

export type VerticalLinkProps = {
  className?: string;
  linkText?: string;
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
