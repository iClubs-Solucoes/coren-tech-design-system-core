import { RefObject } from 'react';

export type HideProps = {
  passwordInput?: RefObject<HTMLInputElement>;
  onClick?: () => void;
};
