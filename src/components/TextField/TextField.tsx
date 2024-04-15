import { useRef } from 'react';

import { Hide } from 'primitives';

import * as S from './styles';
import { TextFieldProps } from './types';

export function TextField({
  inputId,
  label,
  labelErr,
  successLabel,
  icon,
  error,
  success,
  ...propsInput
}: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>();

  const { disabled, value, type } = propsInput;

  return (
    <S.Container disabled={disabled}>
      <S.Icon error={error} success={success}>
        {icon}
      </S.Icon>
      <div>
        <S.Field error={error} success={success}>
          <S.LabelAndInput>
            <S.FieldLabel htmlFor={inputId} fill={!!value}>
              {label}
            </S.FieldLabel>

            <S.StyledInput id={inputId} inputRef={inputRef} {...propsInput} />
          </S.LabelAndInput>

          {type === 'password' && <Hide passwordInput={inputRef} />}
        </S.Field>

        {error && labelErr && <S.LabelErr>{labelErr}</S.LabelErr>}
        {success && successLabel && (
          <S.SuccessLabel>{successLabel}</S.SuccessLabel>
        )}
      </div>
    </S.Container>
  );
}
