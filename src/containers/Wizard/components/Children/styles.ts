import styled, { css } from 'dynamic-styled-components';

import { ChildrenContainerStyleProps } from './types';

export const modifier = {
  visible: css`
    opacity: 1;
  `,
  invisible: css`
    opacity: 0;
  `,
  currentChildren: (currentChildren: boolean) => css`
    width: 100%;
    ${modifier.visible};

    ${!currentChildren && modifier.invisible}
  `,
  nextChildren: (currentChildren: boolean) => css`
    position: absolute;

    pointer-events: none;

    ${modifier.invisible};

    ${currentChildren && modifier.visible}
  `,
};

export const ChildrenContainer = styled.div<ChildrenContainerStyleProps>`
  transition: opacity 0.8s ease-in-out;

  ${({ currentChildren }) => css`
    ${currentChildren && modifier.currentChildren(currentChildren)}
    ${!currentChildren && modifier.nextChildren(currentChildren)}
  `};
`;
