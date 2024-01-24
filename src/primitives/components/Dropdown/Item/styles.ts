import { colors, font } from 'common/styles';
import styled, { css } from 'styled-components';

import { ItemStyleProps } from './types';

const modifier = {
  hover: () => css`
    &:hover {
      background-color: ${colors.neutral.white1};
    }
  `,

  select: () => css`
    background-color: ${colors.neutral.white1};
  `,
};

export const Container = styled.div<ItemStyleProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0.65rem 0.8rem;
  font-size: ${font.sizes.large};
  color: ${colors.neutral.gray5};
  cursor: pointer;
  border-radius: 0.8rem;

  ${({ hover = true, select }) => css`
    ${!!hover && modifier.hover()}
    ${!!select && modifier.select()}
  `}
`;
