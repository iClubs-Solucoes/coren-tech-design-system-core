import { KeyboardEvent, MutableRefObject, useCallback, useEffect } from 'react';
import { useIMask } from 'react-imask';

import * as S from './styles';
import { InputProps } from './types';

export function Input({
  type = 'text',
  value = '',
  placeholder,
  disabled,
  mask = {},
  onChange,
  onChangeUnmasked,
  onClick,
  onKeyDown,
  onKeyEnter,
  ...styleProps
}: InputProps) {
  const {
    ref,
    unmaskedValue,
    setValue,
    value: valueMask,
  } = useIMask(mask, {
    onAccept(valueAccept) {
      onChange?.(valueAccept);
    },
  });

  const handleKeyEnter = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (!!onKeyEnter && e.key === 'Enter') onKeyEnter(e, setValue);
      onKeyDown?.(e, setValue);
    },
    [onKeyEnter, onKeyDown],
  );

  useEffect(() => {
    setValue(value);
  }, [value]);

  useEffect(() => {
    onChangeUnmasked?.(unmaskedValue);
  }, [unmaskedValue, ref, onChangeUnmasked, value]);

  return (
    <S.Container
      {...styleProps}
      ref={ref as MutableRefObject<HTMLInputElement>}
      type={type}
      value={valueMask}
      placeholder={placeholder}
      disabled={disabled}
      onChange={e => onChange?.(e.target.value)}
      onClick={onClick}
      onKeyDown={handleKeyEnter}
    />
  );
}
