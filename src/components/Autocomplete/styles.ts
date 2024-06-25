import { colors, font } from 'common/styles';
import { doesNotOverflowScreen, openAboveOrBelow } from 'common/utils';
import styled, { css } from 'dynamic-styled-components';
import { Dropdown, Input } from 'primitives';

import { MenuStyleProps } from './types';

const modifier = {
  menu: {
    openMenu: (field: HTMLDivElement) => {
      const gapToRefElement = 8;

      const { openCSS, wasOpened } = openAboveOrBelow({
        referenceElement: field,
        gap: gapToRefElement,
      });

      const { doesNotOverflowScreenCSS } = doesNotOverflowScreen({
        referenceElement: field,
        distanceToBorder: 16,
        gapToRefElement,
        opened: wasOpened,
      });

      return css`
        ${doesNotOverflowScreenCSS};
        ${openCSS}
      `;
    },
  },
};

export const AutocompleteContainer = styled.div`
  cursor: pointer;
`;

export const NoSuggestions = styled.p`
  padding: 0.65rem 0.8rem;
`;

export const Menu = styled(Dropdown.Menu)<MenuStyleProps>`
  ${({ field }) => field && modifier.menu.openMenu(field)}
`;

export const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;

  width: 100%;
  height: 5.6rem;

  padding: 1.05rem 2rem;

  background-color: ${colors.neutral.gray1};

  border-radius: 0.8rem;

  > div {
    width: 100%;
    align-self: start;
  }
`;

export const Value = styled(Input)`
  width: 100%;

  background-color: transparent;
  padding-left: 0;

  font: ${font.presets.bodyAndValue};
  color: ${colors.neutral.gray5};

  &::placeholder {
    font: ${font.presets.bodyAndValue};
    color: ${colors.neutral.gray3};
  }
`;
