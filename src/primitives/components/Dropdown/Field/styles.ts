import { colors } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';

import { FieldStyleProps } from './types';

const modifier = {
  theme: {
    primary: () => css`
      background-color: ${colors.neutral.gray1};
      border-radius: 0.8rem;
      padding: 1.2rem 1.6rem;
    `,
    secondary: () => css`
      background-color: ${colors.neutral.white1};
      padding: 0.8rem 1.6rem;
      border-radius: 6.4rem;
    `,
    field: () => css`
      height: 5.6rem;
      width: 100%;
      background-color: ${colors.neutral.gray1};
      border-radius: 0.8rem;
      padding: 1rem 2rem 1rem 2rem;
      gap: 1.6rem;
    `,
    select: () => css`
      background-color: ${colors.normal.white};
      color: ${colors.normal.black};
      padding: 0.4rem 0.8rem;
      border-radius: 0.8rem;
    `,
    disabled: () => css`
      p {
        color: ${colors.neutral.gray2};
      }

      svg {
        * {
          fill: ${colors.neutral.gray3};
        }
      }
    `,
  },
};

export const Container = styled.div<FieldStyleProps>`
  display: flex;
  gap: 1.6rem;
  flex-direction: row;
  align-items: center;
  padding: 1.2rem 1.6rem;
  cursor: pointer;
  color: ${colors.neutral.gray4};

  ${({ fieldTheme, disabled }) => css`
    ${!!fieldTheme && modifier.theme[fieldTheme]}
    ${!!disabled && modifier.theme.disabled()}
  `}

  > p {
    white-space: nowrap;
  }
`;
