import { colors } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';

import { LinkContainerContainerStyleProps } from './types';

export const defaultLinkCSS = css`
  width: 1.6rem;
  height: 0.2rem;
  background-color: ${colors.neutral.gray2};
`;

export const ContainerItem = styled.span`
  display: flex;
  align-items: center;
`;

export const LinkContainerContainer = styled.div<LinkContainerContainerStyleProps>`
  ${({ linkCSS }) => css`
    display: flex;
    align-items: center;

    ${ContainerItem} + ${ContainerItem} {
      &::before {
        display: block;
        content: '';

        ${linkCSS}
      }
    }
  `}
`;
