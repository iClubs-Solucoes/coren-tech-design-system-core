import { colors, font } from 'common/styles';
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
    third: (filled?: boolean) => css`
      background-color: ${colors.normal.white};
      padding: 0.4rem 1.6rem;
      border-radius: 0.8rem;
      outline: 0.1rem solid ${colors.neutral.gray1};
      font: ${font.presets.titlesAndLabels};
      color: ${colors.neutral.gray4};

      *[fill] {
        fill: ${colors.neutral.gray4};
      }

      &:hover {
        background-color: ${colors.neutral.white1};
      }

      ${filled &&
      css`
        background-color: ${colors.neutral.white1};
        color: ${colors.neutral.black1};

        *[fill] {
          fill: ${colors.neutral.black1};
        }
      `}
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

  ${({ fieldTheme, disabled, filled }) => css`
    ${!!fieldTheme && modifier.theme[fieldTheme](filled)}
    ${!!disabled && modifier.theme.disabled()}
  `}

  > p {
    white-space: nowrap;
  }
`;
