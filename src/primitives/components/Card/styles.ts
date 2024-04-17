import { colors } from 'common/styles';
import { shadow } from 'common/styles/theme';
import styled, { css } from 'dynamic-styled-components';

import { CardStyleProps } from './types';

const modifier = {
  focus: () => css`
    background-color: ${colors.normal.white};
  `,
  hover: () => css`
    &:hover {
      background-color: ${colors.normal.white};
    }
  `,
};

export const Container = styled.div<CardStyleProps>`
  display: flex;
  align-items: center;
  border-radius: 1.6rem;
  transition: all 0.2s ease-in;
  padding: 3.2rem 4rem;

  background-color: ${colors.neutral.white1};
  box-shadow: ${shadow.card};

  ${({ focus, hover }) => css`
    ${!!focus && modifier.focus()}
    ${!!hover && modifier.hover()}
  `};
`;
