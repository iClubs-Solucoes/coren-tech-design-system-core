import * as S from './styles';
import { SkeletonLoadingProps } from './types';

export function SkeletonLoading({
  children,
  loading,
  ...styleProps
}: SkeletonLoadingProps) {
  return loading ? <S.Container {...styleProps} /> : children;
}
