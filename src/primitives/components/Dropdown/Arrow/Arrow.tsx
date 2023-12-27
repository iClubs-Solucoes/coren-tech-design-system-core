import { ArrowDownIcon } from 'common/assets/icons';

import * as S from './styles';
import { ArrowProps } from './types';

export function Arrow({
  icon,
  direction = 'bottom',
  ...styleProps
}: ArrowProps) {
  return (
    <S.Container direction={direction} {...styleProps}>
      {icon || <ArrowDownIcon />}
    </S.Container>
  );
}
