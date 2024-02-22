import { ReactElement } from 'react';

import { ExecutionProps } from 'dynamic-styled-components';

export type CoreProviderProps = {
  children: ReactElement;
  theme?: React.NamedExoticComponent<ExecutionProps & object>;
};
