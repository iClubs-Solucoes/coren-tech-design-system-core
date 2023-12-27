import { ScrollProvider } from 'hooks';

import { CoreProviderProps } from './types';

export function CoreProvider({ children }: CoreProviderProps) {
  return <ScrollProvider>{children}</ScrollProvider>;
}
