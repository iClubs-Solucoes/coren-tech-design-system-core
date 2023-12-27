import { ReactElement } from 'react';

import { TourProps } from 'components/Tour/types';
import { NavbarProps } from 'primitives/components/Navbar/types';

export type VisualizationDetailsProps = {
  showAlert?: boolean;
  title?: string;
  children: ReactElement | string;
  disabledOk?: boolean;
  labelOk?: string;
  onCancel?: () => void;
  onOk?: () => void;
  tour?: TourProps;
} & NavbarProps &
  VisualizationDetailsStyleProps;

export type VisualizationDetailsStyleProps = {
  progress?: number;
  disabled?: boolean;
};
