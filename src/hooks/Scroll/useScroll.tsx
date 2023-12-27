import { createContext, useContext, useMemo, useState } from 'react';

import { IScrollContext, ScrollProviderProps } from './types';
const ScrollContext = createContext<IScrollContext>({} as IScrollContext);

function ScrollProvider({ children }: ScrollProviderProps) {
  const [blockedScroll, setBlockedScroll] = useState(false);

  const ScrollContextValues = useMemo(
    () => ({
      blockedScroll,
      setBlockedScroll,
    }),
    [blockedScroll],
  );

  return (
    <ScrollContext.Provider value={ScrollContextValues}>
      {children}
    </ScrollContext.Provider>
  );
}

function useScroll(): IScrollContext {
  return useContext(ScrollContext);
}

export { ScrollProvider, useScroll };
