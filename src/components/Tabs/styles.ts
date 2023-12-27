import { colors, font } from 'common/styles';
import styled, { css } from 'styled-components';

import { TabsStyleProps } from './types';

export const Container = styled.div`
  width: 100%;
  display: grid;
  position: relative;
  margin-top: auto;
`;

export const Filters = styled.div<TabsStyleProps>`
  display: grid;
  flex-direction: row;
  width: 100%;
  font: ${font.presets.titlesAndLabels};
  border-bottom: 0.1rem solid ${colors.neutral.gray1};

  ${({ filters }) => css`
    grid-template-columns: repeat(${filters}, 1fr);
  `}
`;

export const Filter = styled.div<TabsStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.2rem;
  cursor: pointer;
  border-bottom: ${({ selected }) =>
    selected ? ` 0.2rem solid ${colors.neutral.gray5}` : 'none'};

  > svg {
    margin-right: 0.8rem;
  }
`;
