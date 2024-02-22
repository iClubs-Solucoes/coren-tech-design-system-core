import { colors, font } from 'common/styles';
import styled, { css, keyframes } from 'dynamic-styled-components';

import { BulletsStyleProps, ButtonStyleProps } from './types';

const flashing = (originColor: string, targetColor: string) => keyframes`
  0% {
    background-color: ${targetColor};
    transform: scale(1.25);
  }
  
  50%, 100% {
    background-color: ${originColor};
  }
`;

const modifier = {
  button: {
    theme: {
      primary: () => css`
        background-color: ${colors.neutral.gray4};
        color: ${colors.normal.white};

        &:hover {
          background-color: transparent;
          color: ${colors.neutral.gray4};

          *[fill] {
            transition: fill 0.4s ease-out;
            fill: ${colors.neutral.gray4};
          }
        }
      `,
      secondary: () => css`
        background-color: transparent;

        *[fill] {
          transition: fill 0.4s ease-out;
          fill: ${colors.neutral.gray4};
        }

        &:hover {
          background-color: ${colors.neutral.gray4};
          color: ${colors.normal.white};

          *[fill] {
            transition: fill 0.4s ease-out;
            fill: ${colors.normal.white};
          }
        }
      `,
      third: () => css`
        background-color: ${colors.neutral.gray4};
        color: ${colors.normal.white};

        *[fill] {
          transition: fill 0.4s ease-out;
          fill: ${colors.normal.white};
        }

        &:not(:disabled):hover {
          background-color: ${colors.neutral.gray5};

          *[fill] {
            transition: fill 0.4s ease-out;
            fill: ${colors.normal.white};
          }
        }
        &:disabled {
          background-color: ${colors.neutral.gray1};
          color: ${colors.neutral.gray3};

          *[fill] {
            transition: fill 0.4s ease-out;
            color: ${colors.neutral.gray3};
          }
        }
      `,
      fourth: () => css`
        background-color: ${colors.neutral.gray2};
        color: ${colors.neutral.gray5};

        *[fill] {
          transition: fill 0.4s ease-out;
          color: ${colors.neutral.gray5};
        }

        &:not(:disabled):hover {
          background-color: ${colors.neutral.white1};

          *[fill] {
            transition: fill 0.4s ease-out;
            color: ${colors.neutral.gray5};
          }
        }

        &:disabled {
          background-color: ${colors.neutral.gray1};
          color: ${colors.neutral.gray3};

          *[fill] {
            transition: fill 0.4s ease-out;
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
  },
  bullets: {
    theme: {
      primary: () => css``,
      secondary: () => css``,
      third: () => css`
        position: relative;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 1.6rem;
        background-color: ${colors.normal.white};
        color: ${colors.normal.white};
        animation: ${flashing(colors.neutral.gray3, colors.normal.white)} 750ms
          infinite linear alternate;
        animation-delay: 375ms;

        &::before,
        &::after {
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 1.6rem;
          background-color: ${colors.normal.white};
          color: ${colors.normal.white};
          animation: ${flashing(colors.neutral.gray3, colors.normal.white)}
            750ms infinite alternate;
          content: '';
          display: inline-block;
          position: absolute;
          top: 0;
        }

        &::before {
          left: -1.5rem;
          animation-delay: 0ms;
        }

        &::after {
          left: 1.5rem;
          animation-delay: 750ms;
        }
      `,
      fourth: () => css``,
      fifth: () => css``,
    },
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
  `,
  border: () => css`
    border: 0.1rem solid ${colors.neutral.gray3};
  `,
  loading: () => css`
    padding: 2rem 17.1rem 2rem 17.3rem;
  `,
};

export const Wrapper = styled.button<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.05rem 1.6rem;
  border-radius: 6.4rem;
  transition: background-color 0.4s ease-out;

  font: ${font.presets.titlesAndLabels};

  ${({ buttonTheme, border, onlyIcon, icon, disabledBtn, loading }) => css`
    ${!!onlyIcon && modifier.onlyIcon()}
    ${!!icon && !onlyIcon && modifier.hasIcon()}
    ${!!buttonTheme && modifier.button.theme[buttonTheme]}
    ${!!disabledBtn && modifier.disabledBtn()}
    ${!!border && modifier.border()};
    ${!!loading && modifier.loading()}
  `}
`;

export const Bullets = styled.div<BulletsStyleProps>`
  ${({ bulletTheme }) => css`
    ${bulletTheme && modifier.bullets.theme[bulletTheme]}
  `}
`;

export const NotAllowedContainer = styled.div<BulletsStyleProps>`
  cursor: not-allowed;
`;
