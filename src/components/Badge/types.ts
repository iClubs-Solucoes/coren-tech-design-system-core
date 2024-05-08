import { ReactNode } from 'react';

export type BadgeProps = {
  className?: string;
  badgeTheme?: BadgeTheme;
  children?: ReactNode;
  title?: string;
};

export type BadgeContainerProps = {
  badgeTheme: BadgeTheme;
};

export type BadgeTheme = 'primary' | 'secondary';
