import { colors, font } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';
import { Button } from 'primitives';

import { PaginationStyleProps } from './types';

const modifier = {
  disabled: () => css`
    opacity: 0.4;
  `,
  button_disabled: () => css`
    cursor: not-allowed;
  `,
};

export const Container = styled.div<PaginationStyleProps>`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  user-select: none;
  ${({ disabled }) => css`
    ${!!disabled && modifier.disabled()}
  `};
`;

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 4.8rem;
  padding: 1.4rem 0.8rem;
  border-radius: 0.8rem;
  font: ${font.presets.bodyAndValue};
  background-color: ${colors.neutral.gray1};
`;

export const ButtonPagination = styled(Button)<PaginationStyleProps>`
  height: 4.8rem;
  border-radius: 0.8rem;
  padding: 1.2rem;
  transition: background-color 0.3s ease-in;
  background-color: ${colors.neutral.gray1};
  cursor: pointer;

  &:hover {
    background-color: ${colors.normal.white};
  }

  ins {
    ${({ disabledBtn }) => css`
      ${!!disabledBtn && modifier.button_disabled()}
    `}
  }

  svg,
  path {
    fill: ${colors.neutral.gray4};
  }

  ${({ disabledBtn }) => css`
    ${!!disabledBtn && modifier.button_disabled()}
  `}
`;
