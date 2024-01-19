import { HourglassIcon } from 'common/assets/icons';
import { ProgressBar } from 'primitives';

import * as S from './styles';
import { HourglassLoadingProps } from './types';

export function HourglassLoading({
  text,
  progress,
  icon = <HourglassIcon />,
}: HourglassLoadingProps) {
  return (
    <S.Container>
      <S.Icon>{icon}</S.Icon>
      <S.Content>
        <p>{text}</p>
        <ProgressBar progress={progress} />
      </S.Content>
    </S.Container>
  );
}
