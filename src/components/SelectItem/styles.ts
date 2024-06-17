import { colors, font } from 'common/styles';
import { doesNotOverflowScreen, openAboveOrBelow } from 'common/utils';
import styled, { css } from 'dynamic-styled-components';
import { Dropdown } from 'primitives';

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

export const Container = styled.div``;

export const ItemSelect = styled(Dropdown.Item)`
  padding-left: 1.6rem;
`;

export const Label = styled.p`
  font: 400 1.2rem Inter;
  color: ${colors.neutral.gray4};
  height: 1.6rem;
`;

export const Value = styled.p`
  font: ${font.presets.bodyAndValue};
  color: ${colors.neutral.gray5};
`;

export const Placeholder = styled.p`
  font: ${font.presets.bodyAndValue};
  color: ${colors.neutral.gray3};
`;

export const FieldSelect = styled(Dropdown.Field)``;

export const Menu = styled(Dropdown.Menu)<MenuStyleProps>`
  ${({ field }) => css`
    ${field && modifier.menu.openMenu(field)}
  `}
`;
