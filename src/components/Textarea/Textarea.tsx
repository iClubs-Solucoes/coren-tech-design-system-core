import * as S from './styles';
import { TextareaProps } from './types';

export function Textarea({
  className,
  value,
  placeholder,
  label,
  disabled,
  onChange,
}: TextareaProps) {
  return (
    <S.Container disabled={disabled} className={className}>
      <S.Label htmlFor="textarea">{label}</S.Label>
      <S.Textarea
        id="textarea"
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={({ target }) => onChange?.(target.value)}
      />
    </S.Container>
  );
}
