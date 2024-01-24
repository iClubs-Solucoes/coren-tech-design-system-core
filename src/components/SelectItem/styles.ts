import { colors, font } from 'common/styles';
import { Dropdown } from 'primitives';
import styled, { css } from 'styled-components';

import { SelectItemStyleProps } from './types';

const modifier = {
  disabled: () => css`
    * {
      color: ${colors.neutral.gray2};
    }

    svg {
      * {
        fill: ${colors.neutral.gray3};
      }
    }
  `,
};

export const Container = styled.div``;

export const ItemSelect = styled(Dropdown.Item)`
  padding-left: 1.6rem;
`;

export const Label = styled.p`
  font-size: ${font.sizes.small};
  color: ${colors.neutral.gray4};
  height: 1.6rem;
`;

export const Value = styled.p`
  font-size: ${font.sizes.large};
  color: ${colors.neutral.gray5};
`;

export const Placeholder = styled.p`
  font-size: ${font.sizes.large};
  color: ${colors.neutral.gray3};
`;

export const FieldSelect = styled(Dropdown.Field)<SelectItemStyleProps>`
  height: 5.6rem;
  width: 100%;
  background-color: ${colors.neutral.gray1};
  border-radius: 0.8rem;
  padding: 1rem 2rem 1rem 2rem;
  gap: 1.6rem;

  ${({ disabled }) => css`
    ${!!disabled && modifier.disabled()}
  `}
`;
