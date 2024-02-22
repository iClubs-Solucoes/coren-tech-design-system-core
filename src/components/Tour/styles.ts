import { ArrowTourIcon } from 'common/assets/icons';
import { coordinatesMock } from 'common/mocks';
import { colors, font } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';
import { Button } from 'primitives';

import { TourStyleProps } from './types';

const differenceArrow = 15;
const spacingFromRight = 15;

const modifier = {
  top: (coordinates: DOMRect, coordinatesTour: DOMRect) => css`
    top: ${coordinates?.top - coordinatesTour.height - differenceArrow}px;
    left: ${coordinates?.left - coordinatesTour.width + coordinates.width}px;

    > div > svg {
      left: ${coordinatesTour?.width - 64}px;
      top: ${coordinatesTour?.height - 8}px;
      transform: rotate(270deg);
    }
  `,
  right: (coordinates: DOMRect) => css`
    top: ${coordinates?.top - differenceArrow}px;
    left: ${coordinates?.left + coordinates?.width + spacingFromRight}px;

    > div > svg {
      left: -1.7rem;
      top: 1.9rem;
    }
  `,
};

export const Container = styled.div<TourStyleProps>`
  position: absolute;
  ${({
    coordinates = coordinatesMock,
    coordinatesTour = coordinatesMock,
    direction = 'right',
  }) => css`
    ${modifier[direction](coordinates, coordinatesTour)}
  `}
  z-index: 3;
`;

export const Tour = styled.div`
  position: relative;
  padding: 2.4rem;
  background-color: ${colors.neutral.black2};
  border-radius: 1.6rem;
  color: white;
  width: 100%;
`;

export const Head = styled.div`
  display: flex;
  padding-bottom: 1.6rem;
  font: ${font.presets.temporaryEmphasis};
  > svg {
    margin-right: 1.6rem;
  }
`;

export const Content = styled.div`
  font: ${font.presets.bodyAndValue};
`;

export const Footer = styled.div`
  padding-top: 1.6rem;
`;

export const Box = styled.div``;

export const ButtonTourOk = styled(Button)`
  background-color: ${colors.neutral.gray1};
  padding: 0.4rem 0.6rem;
  border-radius: 0.4rem;
  color: ${colors.neutral.gray5};
  margin-left: auto;
`;

export const Arrow = styled(ArrowTourIcon)`
  position: absolute;
`;

export const ChildrenPosition = styled.div<TourStyleProps>`
  width: max-content;
  ${({ focus }) => css`
    opacity: ${focus ? 0 : 1};
  `}
`;

export const Children = styled.div<TourStyleProps>`
  position: absolute;
  z-index: 88;

  ${({ coordinates = coordinatesMock }) => css`
    height: ${coordinates?.height}px;
    width: ${coordinates?.width}px;
    top: ${coordinates?.top}px;
    left: ${coordinates?.left}px;
    right: ${coordinates?.right}px;
  `};
`;
