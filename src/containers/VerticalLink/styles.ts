import { colors } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';

import { LinkTextStyleProps, LinkedChildrenStyleProps } from './types';

const JoinCSS = css`
  content: '';
  position: absolute;
  width: 2.75rem;
  height: 4rem;
  margin-left: -1.5rem;
`;

const modifier = {
  upJoin: css`
    &::before {
      ${JoinCSS}

      margin-top: -4rem;

      border-top: 0;
      border-bottom: 0.2rem solid ${colors.neutral.gray6};
      border-left: 0.2rem solid ${colors.neutral.gray6};
      border-bottom-left-radius: 1.6rem;
    }
  `,
  downJoin: css`
    &::after {
      ${JoinCSS}

      margin-top: 4rem;

      border-top: 0.2rem solid ${colors.neutral.gray6};
      border-bottom: 0;
      border-left: 0.2rem solid ${colors.neutral.gray6};
      border-top-left-radius: 1.6rem;
    }
  `,
  linkText: {
    and: css`
      margin-left: -2.2rem;
    `,
    or: css`
      margin-left: -2.5rem;
    `,
  },
};

export const VerticalLinkContainer = styled.div``;

export const LinkedChildrens = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const LinkedChildren = styled.li<LinkedChildrenStyleProps>`
  display: flex;
  align-items: center;

  ${({ havePredecessor, haveSuccessor }) => css`
    ${havePredecessor && modifier.upJoin}
    ${haveSuccessor && modifier.downJoin}
  `}
`;

export const LinkText = styled.div<LinkTextStyleProps>`
  position: absolute;
  padding: 0.4rem 0.4rem 0.533rem 0.3rem;
  background-color: ${colors.neutral.gray6};
  border-radius: 0.8rem;
  margin-top: 8rem;
  margin-right: 1.6rem;
  font: 400 1.4rem Inter;
  color: ${colors.neutral.gray4};
  z-index: 1;

  ${({ children }) => css`
    ${children === 'e' && modifier.linkText.and}
    ${children === 'ou' && modifier.linkText.or}
  `}
`;
