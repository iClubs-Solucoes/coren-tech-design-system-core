import { IMask } from 'react-imask';

import * as S from './styles';
import { TimeInputProps } from './types';

export function TimeInput({ value, onChange }: TimeInputProps) {
  return (
    <S.TimeInputContainer
      // className={className}
      mask={{
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
      }}
      value={value}
      onChange={onChange}
      onChangeUnmasked={onChange}
    />
  );
}
