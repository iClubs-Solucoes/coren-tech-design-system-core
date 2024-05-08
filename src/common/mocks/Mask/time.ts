import { IMask } from 'react-imask';

import { FactoryOpts } from 'imask/esm/index';

export const timeMask: FactoryOpts = {
  overwrite: true,
  autofix: true,
  mask: 'HH:MM',
  blocks: {
    HH: {
      mask: IMask.MaskedRange,
      placeholderChar: 'HH',
      from: 0,
      to: 23,
      maxLength: 2,
    },
    MM: {
      mask: IMask.MaskedRange,
      placeholderChar: 'MM',
      from: 0,
      to: 59,
      maxLength: 2,
    },
  },
};
