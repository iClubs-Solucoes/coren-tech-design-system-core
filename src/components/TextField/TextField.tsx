import { Input } from 'primitives';

import * as S from './styles';
import { TextFieldProps } from './types';

export function TextField({
  label,
  labelErr,
  icon,
  error,
  ...propsInput
}: TextFieldProps) {
  return (
    <S.Container disabled={propsInput.disabled}>
      <S.Icon error={error}>{icon}</S.Icon>
      <div>
        <S.Field error={error}>
          <S.FieldLabel fill={!!propsInput.value}>{label}</S.FieldLabel>
          <Input {...propsInput} />
        </S.Field>
        {error && <S.LabelErr>{labelErr}</S.LabelErr>}
      </div>
    </S.Container>
  );
}
