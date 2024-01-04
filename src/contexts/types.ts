import { ReactElement } from 'react';

import { ExecutionProps } from 'styled-components';

export type CoreProviderProps = {
  children: ReactElement;
  theme?: React.NamedExoticComponent<ExecutionProps & object>;
};
