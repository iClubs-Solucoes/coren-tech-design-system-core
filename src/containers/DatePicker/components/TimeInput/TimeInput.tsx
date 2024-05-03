import { MutableRefObject, useRef } from 'react';

import { timeMask } from 'common/mocks';

import * as S from './styles';
import { TimeInputProps } from './types';

export function TimeInput({
  className,
  value,
  disabled,
  onChange,
}: TimeInputProps) {
  const ref: MutableRefObject<HTMLInputElement | undefined> = useRef();

  const handleInputClick = () => ref.current?.setSelectionRange(0, 0);

  return (
    <S.TimeInputContainer
      placeholder="00:00"
      className={className}
      inputRef={ref}
      mask={timeMask}
      value={value}
      disabled={disabled}
      onClick={handleInputClick}
      onChange={onChange}
    />
  );
}
