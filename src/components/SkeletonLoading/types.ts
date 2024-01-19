import { ReactElement } from 'react';

export type SkeletonLoadingProps = {
  children?: ReactElement | string;
  loading?: boolean;
  width?: string;
  height?: string;
};
