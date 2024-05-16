import { colors } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';
import { CSS } from 'models';

import { LinkedChildrenStyleProps } from './types';

const linkCommonCSS = css`
  position: relative;
  content: '';
  border-bottom: 0.2rem solid ${colors.neutral.gray1};
  border-left: 0.2rem solid ${colors.neutral.gray1};
  border-bottom-left-radius: 0.8rem;
`;

const modifier = {
  default: {
    shortLink: css`
      &:before {
        width: 3.2rem;
        height: 4.8rem;

        margin-top: -5.25rem;
        margin-left: 2.4rem;
      }
    `,
    longLink: css`
      &:before {
        width: 3.2rem;
        height: 8.8rem;

        margin-top: -8.5rem;
        margin-left: 2.4rem;
      }
    `,
  },
  custom: {
    shortLink: (shortLinkCSS?: CSS) => {
      if (!shortLinkCSS) return;

      return css`
        &:before {
          ${shortLinkCSS}
        }
      `;
    },
    longLink: (longLinkCSS?: CSS) => {
      if (!longLinkCSS) return;

      return css`
        &:before {
          ${longLinkCSS}
        }
      `;
    },
  },
  blackLinks: css`
    &&::before {
      border-color: ${colors.neutral.gray4};
    }
  `,
};

export const LinkedChildren = styled.div<LinkedChildrenStyleProps>`
  ${({ shortLinkCSS, longLinkCSS, blackLinks }) => css`
    display: flex;
    align-items: center;

    &:before {
      ${linkCommonCSS}
    }

    &:first-child {
      ${modifier.custom.shortLink(shortLinkCSS) || modifier.default.shortLink}
    }

    & + & {
      ${modifier.custom.longLink(longLinkCSS) || modifier.default.longLink}
    }

    ${blackLinks && modifier.blackLinks}
  `}
`;

export const TreeViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const LinkedChildrens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
