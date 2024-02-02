import { useRef } from 'react';

import { Hide } from 'primitives';

import * as S from './styles';
import { TextFieldProps } from './types';

export function TextField({
  label,
  labelErr,
  icon,
  error,
  ...propsInput
}: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>();

  const { disabled, value, type } = propsInput;

  return (
    <S.Container disabled={disabled}>
      <S.Icon error={error}>{icon}</S.Icon>
      <div>
        <S.Field error={error}>
          <S.LabelAndInput>
            <S.FieldLabel fill={!!value}>{label}</S.FieldLabel>
            <S.StyledInput inputRef={inputRef} {...propsInput} />
          </S.LabelAndInput>

          {type === 'password' && <Hide passwordInput={inputRef} />}
        </S.Field>

        {labelErr && <S.LabelErr>{labelErr}</S.LabelErr>}
      </div>
    </S.Container>
  );
}
