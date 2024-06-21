import { doesNotOverflowScreen, openAboveOrBelow } from 'common/utils';
import { TextField } from 'components';
import styled, { css } from 'dynamic-styled-components';
import { Dropdown } from 'primitives';

import { MenuStyleProps } from './types';

const modifier = {
  menu: {
    openMenu: (textField: HTMLDivElement) => {
      const gapToRefElement = 8;

      const { openCSS, wasOpened } = openAboveOrBelow({
        referenceElement: textField,
        gap: gapToRefElement,
      });

      const { doesNotOverflowScreenCSS } = doesNotOverflowScreen({
        referenceElement: textField,
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

export const AutocompleteContainer = styled.div``;

export const FieldContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Field = styled(TextField)`
  &:nth-child(2) > div > div {
    height: 100%;
  }
`;

export const NoSuggestions = styled.p`
  padding: 0.65rem 0.8rem;
`;

export const Menu = styled(Dropdown.Menu)<MenuStyleProps>`
  ${({ textField }) => textField && modifier.menu.openMenu(textField)}
`;
