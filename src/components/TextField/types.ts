import { ReactElement } from 'react';

import { InputProps } from 'primitives/components/Input';

export type TextFieldProps = {
  inputId?: string;
  label?: string;
  labelErr?: string;
  successLabel?: string;
  icon?: ReactElement;
} & TextFieldStyleProps &
  InputProps;

export type TextFieldStyleProps = {
  error?: boolean;
  success?: boolean;
  fill?: boolean;
  disabled?: boolean;
};
