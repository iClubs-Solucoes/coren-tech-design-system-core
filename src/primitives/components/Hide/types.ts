import { MutableRefObject } from 'react';

export type HideProps = {
  passwordInput?: MutableRefObject<HTMLInputElement | undefined>;
  onClick?: () => void;
};
