import { InputProps } from 'components/Input/types';

export type SearchProps = object & SearchStyleProps & InputProps;

export type SearchStyleProps = {
  contracted?: boolean;
  className?: string;
  disabled?: boolean;
};
