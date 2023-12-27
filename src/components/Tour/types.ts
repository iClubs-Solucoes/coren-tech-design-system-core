import { CSSProperties, ReactElement } from 'react';

export type TourProps = {
  children?: ReactElement;
  idFilter?: string;
  title?: string;
  description?: string;
  icon?: ReactElement;
  customCSSTour?: CSSProperties;
  onOk?: () => void;
} & TourStyleProps;

export type TourStyleProps = {
  direction?: 'top' | 'right';
  focus?: boolean;
  coordinates?: DOMRect;
  coordinatesTour?: DOMRect;
};
