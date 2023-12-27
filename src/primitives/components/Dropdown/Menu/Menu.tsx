import { ReactElement, cloneElement, useCallback } from 'react';

import { useDetectClickOutside } from 'common/utils/useDetechClickoutside';

import * as S from './styles';
import { MenuProps } from './types';

export function Menu({
  children,
  direction,
  coordinates,
  open,
  onMouseEnter,
  onCloseDropdown,
  onMouseLeave,
  ...styleProps
}: MenuProps) {
  const ref = useDetectClickOutside<HTMLDivElement>({
    onTriggered: () => {
      onCloseDropdown?.(false);
    },
  });

  const renderItem = useCallback(
    (children: ReactElement) => {
      return cloneElement(children, {
        ...children.props,
        open,
        onCloseDropdown,
      });
    },
    [open, onCloseDropdown],
  );

  const render = useCallback(() => {
    if (typeof children === 'string') return children;

    if (!Array.isArray(children)) return renderItem(children);

    return children.map(c => renderItem(c));
  }, [children, open]);

  return (
    <S.Container
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      direction={direction}
      coordinates={coordinates}
      {...styleProps}
    >
      {render()}
    </S.Container>
  );
}
