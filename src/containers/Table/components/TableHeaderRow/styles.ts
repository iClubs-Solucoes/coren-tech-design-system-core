import { colors } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';

import { TableHeaderRowStylesProps } from './interfaces';

export const Container = styled.div<TableHeaderRowStylesProps>`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));
  color: ${colors.normal.white};

  ${({ gridSystem }: TableHeaderRowStylesProps) => css`
    ${!!gridSystem && `grid-template-columns: ${gridSystem};`}
  `}
`;

export const Line = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 0.1rem;
  top: 4.9rem;
`;
