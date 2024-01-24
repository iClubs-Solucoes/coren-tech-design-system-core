import styled, { css } from 'styled-components';

import { ArrowStyleProps } from './types';

const animationInvert = {
  right: css`
    transform: rotate(90deg);
  `,
  left: css`
    transform: rotate(270deg);
  `,
  top: css`
    transform: rotate(0deg);
  `,
  bottom: css`
    transform: rotate(180deg);
  `,
};

const modifier = {
  direction: {
    right: () => css`
      transform: rotate(270deg);
    `,
    left: () => css`
      transform: rotate(90deg);
    `,
    top: () => css`
      transform: rotate(180deg);
    `,
    bottom: () => css`
      transform: rotate(0deg);
    `,
  },
  disabled: () => css`
    display: none;
  `,
  open: (direction: ArrowStyleProps['direction']) => css`
    ${animationInvert[direction || 'right']}
  `,
};

export const Container = styled.ins<ArrowStyleProps>`
  display: block;
  outline: none;
  margin-left: auto;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  transition: transform 0.4s ease-out;

  ${({ direction, open, disabled }) => css`
    ${!!direction && !open && modifier.direction[direction]}
    ${!!open && modifier.open(direction)}
    ${!!disabled && modifier.disabled()}
  `}
`;
