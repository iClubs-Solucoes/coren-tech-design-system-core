import { colors, font } from 'common/styles';
import styled, { css, keyframes } from 'dynamic-styled-components';
import { Input } from 'primitives';

import { TextFieldStyleProps } from './types';

const animationError = keyframes`
  0% {
    border: 0.2rem solid ${colors.neutral.gray1};
    transform: translateX(0rem);
    timing-function: ease-in;
  }
  37% {
    transform: translateX(0.5rem);
    timing-function: ease-out;
  }
  55% {
    transform: translateX(-0.5rem);
    timing-function: ease-in;
  }
  73% {
    transform: translateX(0.4rem);
    timing-function: ease-out;
  }
  82% {
    transform: translateX(-0.4rem);
    timing-function: ease-in;
  }
  91% {
    transform: translateX(0.2rem);
    timing-function: ease-out;
  }
  96% {
    transform: translateX(-0.2rem);
    timing-function: ease-in;
  }
  100% {
    border: 0.2rem solid ${colors.soft.orange4};
    transform: translateX(0rem);
    timing-function: ease-in;
  }
`;

const animationErrorMessage = keyframes`
  0% {
    margin-top: -8rem;
    opacity: 0;
  }

  100% {
    margin-top: 0.8rem;
    opacity: 1;
  }
`;

const modifier = {
  error: () => css`
    border: 0.2rem solid ${colors.soft.orange4};
    animation: ${animationError} 0.5s;
  `,
  success: () => css`
    border: 0.2rem solid ${colors.soft.green5};
  `,
  errorIcon: () => css`
    fill: ${colors.soft.orange4};
  `,
  successIcon: () => css`
    fill: ${colors.soft.green5};
  `,
  disabled: () => css`
    opacity: 0.5;
  `,
  fill: () => css`
    color: ${colors.neutral.gray5};
  `,
};

export const Container = styled.div<TextFieldStyleProps>`
  display: flex;
  flex-direction: row;
  width: 100%;

  > :last-child {
    width: 100%;
  }

  ${({ disabled }) => css`
    ${!!disabled && modifier.disabled()}
  `}
`;

export const Icon = styled.div<TextFieldStyleProps>`
  display: flex;
  height: 5.2rem;
  align-items: center;
  justify-content: center;

  > svg {
    display: flex;
    margin-right: 1.6rem;
    path {
      transition: fill 0.5s ease-out;
      ${({ error, success }) => css`
        ${!!error && modifier.errorIcon()}
        ${!!success && modifier.successIcon()}
      `}
    }
  }
`;

export const Field = styled.div<TextFieldStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  position: relative;
  z-index: 2;
  background-color: ${colors.neutral.gray1};

  ${({ error, success }) => css`
    ${!!error && modifier.error()}
    ${!!success && modifier.success()}
  `}
`;

export const FieldLabel = styled.label<TextFieldStyleProps>`
  width: 100%;
  font-size: ${font.sizes.small};
  font-weight: ${font.regular};
  color: ${colors.neutral.gray4};

  ${({ fill }) => css`
    ${!!fill && modifier.fill()}
  `}
`;

export const LabelErr = styled.div`
  margin-top: 0.8rem;
  margin-left: 0.8rem;
  font-size: ${font.sizes.small};
  color: ${colors.soft.orange6};
  z-index: 0;

  animation: ${animationErrorMessage} 0.5s;
`;

export const SuccessLabel = styled.div`
  margin-top: 0.8rem;
  margin-left: 0.8rem;
  font-size: ${font.sizes.small};
  color: ${colors.soft.green5};
  z-index: 0;
`;

export const LabelAndInput = styled.span``;

export const StyledInput = styled(Input)`
  background-color: ${colors.neutral.gray1};
  font-size: ${font.sizes.large};
  color: ${colors.neutral.gray5};
  padding: 0;

  &::placeholder {
    font-size: ${font.sizes.large};
    color: ${colors.neutral.gray4};
    opacity: 1;
  }
`;
