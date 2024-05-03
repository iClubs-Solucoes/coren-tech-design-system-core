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
      <Dropdown.Field fieldTheme="field">
        <div>
          <S.Label>{label}</S.Label>

          {value && <S.Value>{value}</S.Value>}

          {!value && <S.Placeholder>{placeholder}</S.Placeholder>}
        </div>

        <Dropdown.Arrow />
      </Dropdown.Field>
    </Dropdown.Trigger>
  );
}
