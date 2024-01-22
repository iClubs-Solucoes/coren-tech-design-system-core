import { colors, font } from 'common/styles';
import styled, { css } from 'styled-components';

import { ButtonStyleProps } from './types';

const modifier = {
  theme: {
    primary: () => css`
      background-color: ${colors.neutral.gray4};
      color: ${colors.normal.white};

      &:hover {
        background-color: transparent;
        color: ${colors.neutral.gray4};

        *[fill] {
          transition: all 0.4s ease-out;
          fill: ${colors.neutral.gray4};
        }
      }
    `,
    secondary: () => css`
      background-color: transparent;

      *[fill] {
        transition: all 0.4s ease-out;
        fill: ${colors.neutral.gray4};
      }

      &:hover {
        background-color: ${colors.neutral.gray4};
        color: ${colors.normal.white};

        *[fill] {
          transition: all 0.4s ease-out;
          fill: ${colors.normal.white};
        }
      }
    `,
    third: () => css`
      background-color: ${colors.neutral.gray4};
      color: ${colors.normal.white};

      *[fill] {
        transition: all 0.4s ease-out;
        fill: ${colors.normal.white};
      }

      &:not(:disabled):hover {
        background-color: ${colors.neutral.gray5};

        *[fill] {
          transition: all 0.4s ease-out;
          fill: ${colors.normal.white};
        }
      }

      &:disabled {
        background-color: ${colors.neutral.gray1};
        color: ${colors.neutral.gray3};

        *[fill] {
          transition: all 0.4s ease-out;
          color: ${colors.neutral.gray3};
        }
      }
    `,
    fourth: () => css`
      background-color: ${colors.neutral.gray2};
      color: ${colors.neutral.gray5};

      *[fill] {
        transition: all 0.4s ease-out;
        color: ${colors.neutral.gray5};
      }

      &:not(:disabled):hover {
        background-color: ${colors.neutral.white1};

        *[fill] {
          transition: all 0.4s ease-out;
          color: ${colors.neutral.gray5};
        }
      }

      &:disabled {
        background-color: ${colors.neutral.gray1};
        color: ${colors.neutral.gray3};

        *[fill] {
          transition: all 0.4s ease-out;
          color: ${colors.neutral.gray3};
        }
      }
    `,
    fifth: () => css`
      padding: 1.2rem 1.6rem;
      border-radius: 0.8rem;
      border: 0.1rem solid ${colors.neutral.gray3};
      background-color: ${colors.neutral.white1};
      font: ${font.presets.titlesAndLabels};

      *[fill] {
        transition: all 0.4s ease-out;
        color: ${colors.neutral.gray5};
      }

      &:not(:disabled):hover {
        border: 0.1rem solid ${colors.neutral.gray4};
        background-color: ${colors.normal.white};

        *[fill] {
          transition: all 0.4s ease-out;
          color: ${colors.neutral.gray5};
        }
      }

      &:disabled {
        border: 0.1rem solid ${colors.neutral.gray2};
        background-color: ${colors.neutral.white1};

        *[fill] {
          transition: all 0.4s ease-out;
          color: ${colors.neutral.gray3};
        }
      }
    `,
  },
  onlyIcon: () => css`
    padding: 1.6rem;
    border-radius: 6.4rem;
  `,
  hasIcon: () => css`
    > svg {
      margin-right: 0.8rem;
    }
  `,
  disabledBtn: () => css`
    opacity: 0.4;
    pointer-events: none;
    cursor: not-allowed;
  `,
  border: () => css`
    border: 0.1rem solid ${colors.neutral.gray3};
  `,
};

export const Wrapper = styled.button<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.05rem 1.6rem;
  border-radius: 6.4rem;
  transition: all 0.4s ease-out;

  font: ${font.presets.titlesAndLabels};

  ${({ buttonTheme, border, onlyIcon, icon, disabledBtn }) => css`
    ${!!onlyIcon && modifier.onlyIcon()}
    ${!!icon && !onlyIcon && modifier.hasIcon()}
    ${!!buttonTheme && modifier.theme[buttonTheme]}
    ${!!disabledBtn && modifier.disabledBtn()}
    ${!!border && modifier.border()};
  `}
`;
