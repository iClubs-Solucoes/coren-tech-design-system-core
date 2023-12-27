import { font } from 'common/styles';
import styled, { css } from 'styled-components';

import { TableCellStyleProps } from './types';

const modifier = {
  start: () => css`
    justify-content: start;
  `,
  center: () => css`
    justify-content: center;
    text-align: center;
  `,
  end: () => css`
    justify-content: end;
  `,

  text: () => css`
    display: block;
    text-overflow: ellipsis;
    -moz-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  `,
};

export const Container = styled.div<TableCellStyleProps>`
  display: flex;
  max-width: 100%;
  height: 2.19rem;
  overflow: hidden;
  justify-content: center;
  font: ${font.presets.bodyAndValue};

  ${({ align, text }) => css`
    ${!!align && modifier[align]()}
    ${!!text && modifier.text()}
  `}
`;
