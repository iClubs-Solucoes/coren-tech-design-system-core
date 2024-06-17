import { colors } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';

import { LinkedChildrenStyleProps, LinkedChildrensStyleProps } from './types';

const linkCommonCSS = css`
  position: relative;
  content: '';
  border-bottom: 0.2rem solid ${colors.neutral.gray1};
  border-left: 0.2rem solid ${colors.neutral.gray1};
  border-bottom-left-radius: 0.8rem;
  flex-shrink: 0;
`;

export const defaultShortLinkCSS = css`
  width: 3.2rem;
  height: 4.8rem;
  margin-top: -5.25rem;
  margin-left: 2.4rem;
`;

export const defaultLongLinkCSS = css`
  width: 3.2rem;
  height: 8.8rem;
  margin-top: -8.5rem;
  margin-left: 2.4rem;
`;

const modifier = {
  blackLinks: css`
    &&::before {
      border-color: ${colors.neutral.gray4};
    }
  `,
};

export const LinkedChildren = styled.div<LinkedChildrenStyleProps>`
  ${({ shortLinkCSS, blackLinks }) => css`
    display: flex;
    align-items: center;

    &:before {
      ${linkCommonCSS}
    }

    &:first-child::before {
      ${shortLinkCSS}
    }

    ${blackLinks && modifier.blackLinks}
  `}
`;

export const TreeViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const LinkedChildrens = styled.div<LinkedChildrensStyleProps>`
  ${({ longLinkCSS }) => css`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    ${LinkedChildren} + ${LinkedChildren}::before {
      ${longLinkCSS}
    }
  `}
`;
