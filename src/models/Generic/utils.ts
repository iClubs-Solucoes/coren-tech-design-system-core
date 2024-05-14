import { Dispatch } from 'react';

import { RuleSet } from 'styled-components';

export type StateSetter<T> = Dispatch<React.SetStateAction<T>>;

export type CSS = RuleSet<object>;
