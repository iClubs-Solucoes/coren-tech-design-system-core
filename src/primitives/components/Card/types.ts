import { ReactElement } from 'react';

export type CardProps = {
  children: ReactElement | string;
  onClick?: () => void;
} & CardStyleProps;

export type CardStyleProps = {
  focus?: boolean;
  hover?: boolean;
};
