import { ReactNode } from 'react';

export type SectionsProps = {
  className?: string;
  children: ReactNode[] | ReactNode;
  initialDivisor?: boolean;
} & SectionsContainerStyleProps;

export type SectionsContainerStyleProps = { sectionsPadding?: string };
