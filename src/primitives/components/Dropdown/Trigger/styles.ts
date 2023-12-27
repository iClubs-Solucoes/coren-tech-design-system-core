import styled, { css } from 'styled-components';

import { TriggerProps } from './types';

const modifier = {
  disabled: () => css`
    opacity: 0.6;
  `,
};

export const Container = styled.div<TriggerProps>`
  display: flex;
  flex-direction: row;

  ${({ disabled }) => css`
    ${!!disabled && modifier.disabled()}
  `}
`;
