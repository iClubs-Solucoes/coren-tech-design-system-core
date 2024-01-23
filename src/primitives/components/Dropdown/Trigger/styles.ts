import styled, { css } from 'styled-components';

import { TriggerProps } from './types';

const modifier = {
  disabled: () => css``,
};

export const Container = styled.div<TriggerProps>`
  display: flex;
  width: 100%;
  flex-direction: row;

  ${({ disabled }) => css`
    ${!!disabled && modifier.disabled()}
  `}
`;
