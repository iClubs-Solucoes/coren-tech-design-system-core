import * as S from './styles';
import { ProgressBarProps } from './types';

export function ProgressBar({ progress }: ProgressBarProps) {
  return progress === undefined ? (
    ''
  ) : (
    <S.Container data-testid="progress-bar" progress={progress} />
  );
}
