import { KeyboardEvent, useCallback, useEffect } from 'react';
import { useIMask } from 'react-imask';

import * as S from './styles';
import { InputProps } from './types';

export function Input({
  className,
  id,
  type = 'text',
  value = '',
  placeholder,
  disabled,
  mask = {},
  inputRef,
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
      className={className}
      id={id}
      ref={element => {
        if (inputRef) inputRef.current = element || undefined;
        ref.current = element || null;
      }}
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
