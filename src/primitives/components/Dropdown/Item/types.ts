import { MouseEventHandler, ReactElement } from 'react';

export type ItemProps = {
  children: ReactElement | string;
  title?: string;
  noopClose?: boolean;
  onClick?: MouseEventHandler<Element>;
} & ItemStyleProps;

export type ItemStyleProps = {
  hover?: boolean;
  select?: boolean;
};
