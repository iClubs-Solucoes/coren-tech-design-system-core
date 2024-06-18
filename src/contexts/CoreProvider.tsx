import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'dynamic-styled-components';
import { ScrollProvider } from 'hooks';
import { ToastProvider } from 'hooks/Toast';
import { theme } from 'index';

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
      <>
        <ToastProvider>
          <ScrollProvider>{children}</ScrollProvider>
        </ToastProvider>

        <theme.GlobalStyles />
      </>
    </StyleSheetManager>
  );
}
