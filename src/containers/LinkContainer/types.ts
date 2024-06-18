import { ReactNode } from 'react';

import { CSS } from 'models';

export type ChildrenWithId = {
  id: string;
  children: ReactNode;
};

export type LinkContainerProps = {
  className?: string;
  children: ReactNode[] | ReactNode;
  linkCSS?: CSS;
};

export type LinkContainerContainerStyleProps = {
  linkCSS: CSS;
};
