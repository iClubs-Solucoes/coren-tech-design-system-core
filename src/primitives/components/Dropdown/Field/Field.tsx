import { cloneElement, useCallback } from 'react';

import * as S from './styles';
import { FieldProps } from './types';

export function Field({
  children,
  fieldTheme,
  open,
  className,
  disabled,
  filled,
}: FieldProps) {
  const render = useCallback(() => {
    if (typeof children === 'string') return children;

    if (!Array.isArray(children))
      return cloneElement(children, {
        ...children.props,
        open,
      });

    return children.map((c, index) =>
      cloneElement(c, {
        ...c.props,
        open,
        key: index,
      }),
    );
  }, [children, open]);

  return (
    <S.Container
      className={className}
      fieldTheme={fieldTheme}
      disabled={disabled}
      filled={filled}
    >
      {render()}
    </S.Container>
  );
}
