import * as S from './styles';
import { TableRowProps } from './types';

export function TableRow({
  className,
  children,
  onClick,
  onMouseEnter,
  ...styleProps
}: TableRowProps) {
  return (
    <S.Container
      {...styleProps}
      className={className}
      onMouseEnter={onMouseEnter}
      tabIndex={styleProps.index}
      onClick={e => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      {children}
    </S.Container>
  );
}
