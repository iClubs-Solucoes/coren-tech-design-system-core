import { colors } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';

import { TableRowsStyleProps } from './types';

const modifier = {
  inlines: (index?: number) => css`
    ${(index || 0) % 2 === 0
      ? `background-color: ${colors.neutral.white1};`
      : `background-color: ${colors.neutral.gray1};`}
  `,
};

export const Container = styled.div<TableRowsStyleProps>`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));
  padding: 1.6rem 0rem 1.6rem 0rem;
  height: 5.3rem;
  transition: 0.2s all ease-in;
  background-color: ${colors.neutral.white1};

  &:hover {
    background-color: ${colors.normal.white};
    cursor: pointer;
  }

  &:focus {
    background-color: ${colors.normal.white};
  }

  ${({ gridSystem, index }) => css`
    ${!!gridSystem && `grid-template-columns: ${gridSystem};`}
    ${modifier.inlines(index)}
  `}
`;
