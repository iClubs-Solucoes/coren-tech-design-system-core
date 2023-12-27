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
    (children: ReactElement) => {
      return cloneElement(children, {
        ...children.props,
        open,
        onClick: () => {
          children.props?.onClick?.();
          if (!children.props?.noopClose) onCloseDropdown?.(false);
        },
      });
    },
    [open],
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
