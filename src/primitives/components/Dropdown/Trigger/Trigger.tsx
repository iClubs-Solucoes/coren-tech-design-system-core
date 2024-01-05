import { cloneElement, useCallback } from 'react';

import * as S from './styles';
import { TriggerProps } from './types';

export function Trigger({
  children,
  open,
  hover,
  disabled,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: TriggerProps) {
  const render = useCallback(() => {
    if (typeof children === 'string') return children;
    return cloneElement(children, {
      ...children.props,
      open,
    });
  }, [children, open]);

  return (
    <S.Container
      disabled={disabled}
      data-testid="trigger-dropdown"
      onMouseEnter={e => {
        if (!disabled && hover && !!onMouseEnter) onMouseEnter(e);
      }}
      onMouseLeave={e => {
        if (!disabled && hover && !!onMouseLeave) onMouseLeave(e);
      }}
      onClick={e => {
        if (disabled) return;
        onClick?.(e);
      }}
    >
      {render()}
    </S.Container>
  );
}
