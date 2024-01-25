import { ReactElement, cloneElement, useCallback } from 'react';

import * as S from './styles';
import { ListProps } from './types';

export function List({
  children,
  open,
  onCloseDropdown,
  ...styleProps
}: ListProps) {
  const renderItem = useCallback(
    (c: ReactElement) => {
      return cloneElement(c, {
        ...c.props,
        open,
        onClick: e => {
          e.stopPropagation();
          c.props?.onClick?.(e);
          if (!c.props?.noopClose) onCloseDropdown?.(false);
        },
      });
    },
    [open, children, onCloseDropdown],
  );

  const render = useCallback(() => {
    if (typeof children === 'string') return children;

    if (!Array.isArray(children)) return renderItem(children);

    return children.map(c => renderItem(c));
  }, [children, open]);

  return Array.isArray(children) && children.length === 0 ? (
    ''
  ) : (
    <S.Container {...styleProps}>{render()}</S.Container>
  );
}
