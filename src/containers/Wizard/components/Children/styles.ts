import styled, { css } from 'styled-components';

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

    transition: opacity 0.8s;
  `,
  nextChildren: (currentChildren: boolean) => css`
    width: 0%;
    ${modifier.invisible};

    ${currentChildren && modifier.visible}

    transition: opacity 0.8s;
  `,
};

export const ChildrenContainer = styled.div<ChildrenContainerStyleProps>`
  ${({ currentChildren }) => css`
    ${currentChildren && modifier.currentChildren(currentChildren)}
    ${!currentChildren && modifier.nextChildren(currentChildren)}
  `};
`;
