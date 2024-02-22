import { colors } from 'common/styles';
import { shadow } from 'common/styles/theme';
import styled, { css } from 'dynamic-styled-components';

import { NavbarStyleProps } from './types';

const modifier = {
  open: () => css`
    right: 0rem;
    box-shadow: ${shadow.drawer};
  `,
};

export const Container = styled.div<NavbarStyleProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  transition: right 0.5s ease-out;
  width: 64rem;
  height: 100%;
  padding: 8rem 5.6rem 5.6rem 5.6rem;
  right: -64rem;
  top: 0;
  background-color: ${colors.neutral.white1};
  z-index: 2;

  ${({ open }) => css`
    ${!!open && modifier.open()}
  `}
`;
