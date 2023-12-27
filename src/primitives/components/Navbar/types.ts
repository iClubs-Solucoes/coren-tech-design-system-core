import { ReactElement } from 'react';

export type NavbarProps = {
  children?: ReactElement | string;
} & NavbarStyleProps;

export type NavbarStyleProps = {
  open?: boolean;
  className?: string;
};
