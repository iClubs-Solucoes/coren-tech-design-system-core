import { Dispatch } from 'react';

export type StateSetter<T> = Dispatch<React.SetStateAction<T>>;
