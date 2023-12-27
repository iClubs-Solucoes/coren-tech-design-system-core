import { coordinatesMock } from 'common/mocks';
import { colors } from 'common/styles';
import { shadow } from 'common/styles/theme';
import styled, { css, keyframes } from 'styled-components';

import { Adjust, MenuStyleProps } from './types';

const differencePadding = 16;

const modifier = {
  directionShowMenu: {
    top: () => css``,
    left: (coordinates: DOMRect, adjust: Adjust) => css`
      top: ${coordinates.top + adjust.top}px;
      left: ${coordinates.left -
      (coordinates.width + differencePadding) +
      adjust.left}px;
    `,
    right: (coordinates: DOMRect, adjust: Adjust) => css`
      top: ${coordinates.top - differencePadding + adjust.top}px;
      left: ${coordinates.left + coordinates.width + adjust.left}px;
    `,
    bottom: (coordinates: DOMRect, adjust: Adjust) => css`
      top: ${coordinates.top + coordinates.height + adjust.top}px;
      left: ${coordinates.left + adjust.left}px;
    `,
  },
};

const openDropdownList = {
  top: () => keyframes`
  `,
  left: (coordinates: DOMRect, adjust: Adjust) => keyframes`
    from {
      opacity: 0;
      top: ${coordinates.top}px;
      left: ${coordinates.left}px;
    }

    to {
      ${modifier.directionShowMenu.left(coordinates, adjust)}
      opacity: 1;
    }
  `,
  right: (coordinates: DOMRect, adjust: Adjust) => keyframes`
    from {
      opacity: 0;
      top: ${coordinates.top}px;
      left: ${coordinates.left}px;
    }

    to {
      opacity: 1;
      ${modifier.directionShowMenu.right(coordinates, adjust)}
    }
  `,
  bottom: (coordinates: DOMRect, adjust: Adjust) => keyframes`
    from {
      opacity: 0;
      top: ${coordinates.top}px;
      left: ${coordinates.left}px;
    }

    to {
      opacity: 1;
      ${modifier.directionShowMenu.bottom(coordinates, adjust)}
    }
  `,
};

export const Container = styled.div<MenuStyleProps>`
  position: absolute;
  display: flex;
  z-index: 999;
  flex-direction: column;
  background-color: ${colors.normal.white};
  border-radius: 0.8rem;
  padding: 1.6rem;
  padding-bottom: 2.4rem;
  gap: 1.6rem;
  box-shadow: ${shadow.card};

  ${({
    coordinates = coordinatesMock,
    direction = 'bottom',
    adjust = {
      top: 0,
      left: 0,
    },
  }) => css`
    ${modifier.directionShowMenu[direction](coordinates, adjust)}
    animation: ${openDropdownList[direction](coordinates, adjust)} 0.1s linear;
  `}
`;

export const List = styled.div`
  width: max-content;
`;
