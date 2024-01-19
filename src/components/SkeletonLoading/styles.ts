import styled, { css, keyframes } from 'styled-components';

import { SkeletonLoadingProps } from './types';

const skeletonAnimation = keyframes`

  from {
    background-color: hsl(200, 0%, 60%);

  }

  to {
    background-color: hsl(200, 0%, 80%);

  }
`;

export const Container = styled.div<SkeletonLoadingProps>`
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  border-radius: 0.8rem;

  ${({ height, width }) => css`
    height: ${height || '3.2rem'};
    width: ${width || '100%'};
  `}
`;
