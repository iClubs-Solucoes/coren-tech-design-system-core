import { ReactElement } from 'react';

import { TourProps } from 'components/Tour/types';
import { ButtonTheme } from 'primitives/components/Button/types';
import { NavbarProps } from 'primitives/components/Navbar/types';

export type VisualizationDetailsProps = {
  className?: string;
  showAlert?: boolean;
  title?: string;
  children: ReactElement | string;
  disabledOk?: boolean;
  labelOk?: string;
  okButtonTheme?: ButtonTheme;
  cancelButtonTheme?: ButtonTheme;
  okLoading?: boolean;
  xButton?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
  tour?: TourProps;
} & NavbarProps &
  VisualizationDetailsStyleProps;

export type VisualizationDetailsStyleProps = {
  progress?: number;
  disabled?: boolean;
};
