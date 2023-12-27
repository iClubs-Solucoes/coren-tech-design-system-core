import { ReactElement } from 'react';

import { InputProps } from 'components/Input/types';

export type TextFieldProps = {
  label?: string;
  labelErr?: string;
  icon?: ReactElement;
} & TextFieldStyleProps &
  InputProps;

export type TextFieldStyleProps = {
  error?: boolean;
  fill?: boolean;
  disabled?: boolean;
};
