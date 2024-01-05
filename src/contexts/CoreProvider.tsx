import isPropValid from '@emotion/is-prop-valid';
import { ScrollProvider } from 'hooks';
import { ToastProvider } from 'hooks/Toast';
import { theme } from 'index';
import { StyleSheetManager } from 'styled-components';

import { CoreProviderProps } from './types';

export function CoreProvider({ children }: CoreProviderProps) {
  return (
    <StyleSheetManager
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string'
          ? isPropValid(propName)
          : true;
      }}
    >
      <ToastProvider>
        <ScrollProvider>{children}</ScrollProvider>
      </ToastProvider>
      <theme.GlobalStyles />
    </StyleSheetManager>
  );
}
