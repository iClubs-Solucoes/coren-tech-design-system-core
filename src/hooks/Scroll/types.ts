import { Dispatch, ReactElement, SetStateAction } from 'react';

export type IScrollContext = {
  blockedScroll: boolean;
  setBlockedScroll: Dispatch<SetStateAction<boolean>>;
};

export type ScrollProviderProps = {
  children: ReactElement;
};
