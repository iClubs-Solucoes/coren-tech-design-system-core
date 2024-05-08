import { Dropdown } from 'primitives';

import * as S from './styles';
import { DefaultInputProps } from './types';

export function DefaultInput({
  className,
  value,
  label,
  placeholder,
}: DefaultInputProps) {
  return (
    <Dropdown.Trigger className={className}>
      <S.Field fieldTheme="field">
        <div>
          <S.Label>{label}</S.Label>

          {value && <S.Value>{value}</S.Value>}

          {!value && <S.Placeholder>{placeholder}</S.Placeholder>}
        </div>

        <Dropdown.Arrow />
      </S.Field>
    </Dropdown.Trigger>
  );
}
