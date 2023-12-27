import { colors } from 'common/styles';
import styled, { css } from 'styled-components';

import { TableStyleProps } from './types';

const modifier = {
  scroll: (scroll?: string) => css`
    > div {
      width: ${scroll};
      overflow-x: auto;
      overflow-y: hidden;

      :first-child {
        > div {
          overflow: hidden;
          overflow-y: hidden;
          width: ${scroll};
        }
      }
    }
  `,
};

export const Container = styled.div<TableStyleProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${colors.normal.white};
  border-radius: 1.6rem;
  max-width: 100%;
  z-index: 1;
  overflow-y: hidden;

  ${({ scroll }) => css`
    ${!!scroll && modifier.scroll(scroll === true ? '192rem' : scroll)}
  `}
`;
