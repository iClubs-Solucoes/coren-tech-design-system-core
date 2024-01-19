import { colors } from 'common/styles';
import styled, { css } from 'styled-components';

import { ProgressBarStyleProps } from './types';

const modifier = {
  progressBar: (progress: number) => css`
    width: ${progress}%;
  `,
};

export const Container = styled.div<ProgressBarStyleProps>`
  display: flex;
  width: 100%;
  border-radius: 0.8rem;
  height: 0.8rem;
  background-color: ${colors.neutral.gray1};
  transition: width 0.5s;

  &::before {
    content: ' ';
    display: inline-block;

    border-radius: 0.8rem;
    height: 0.8rem;
    background-color: ${colors.neutral.gray5};
    transition: width 0.5s;
    width: 0rem;
    ${({ progress }) => css`
      ${!!progress && modifier.progressBar(progress)}
    `}
  }
`;
