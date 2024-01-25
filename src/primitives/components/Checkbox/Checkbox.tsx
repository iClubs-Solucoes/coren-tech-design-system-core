import * as S from './styles';
import { CheckboxProps } from './types';

export function Checkbox({ checked, label, onChange }: CheckboxProps) {
  return (
    <S.Container checked={checked}>
      <S.Input
        id="checkbox"
        type="checkbox"
        checked={checked}
        onChange={e => onChange?.(e.target.checked)}
      />
      <S.Label htmlFor="checkbox">{label}</S.Label>
    </S.Container>
  );
}
