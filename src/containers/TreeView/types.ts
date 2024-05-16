import { ReactNode } from 'react';

import { CSS } from 'models';

export type ChildrenWithId = {
  id: string;
  children: ReactNode;
};

export type TreeViewProps = {
  className?: string;
  parent?: ReactNode;
  children: ReactNode[] | ReactNode;
  links?: {
    shortLinkCSS?: CSS;
    longLinkCSS?: CSS;
  };
  blackLinks?: boolean;
};

export type LinkedChildrenStyleProps = {
  shortLinkCSS?: CSS;
  longLinkCSS?: CSS;
  blackLinks?: boolean;
};
