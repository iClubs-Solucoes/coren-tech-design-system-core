import { colors } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';

import { DayContainerStyleProps } from './types';

const modifier = {
  common: css`
    font: 400 1.4rem Inter;
    border-radius: 0.4rem;
  `,
  default: css`
    color: ${colors.neutral.gray4};
    background-color: ${colors.normal.white};
  `,
  disabled: css`
    cursor: not-allowed;
  `,
  selected: css`
    color: ${colors.neutral.gray5};
    background-color: ${colors.neutral.gray2};
    outline: none;
  `,
  hover: css`
    background-color: ${colors.neutral.gray1};
    color: ${colors.neutral.gray4};
  `,
  notCurrentMonthDay: css`
    color: ${colors.neutral.gray2};
    background-color: ${colors.normal.white};
  `,
};

export const DayContainer = styled.button<DayContainerStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 0.4rem;

  ${modifier.common}

  ${modifier.default}

  &:not(:disabled):hover {
    ${modifier.hover};
  }

  ${({ notCurrentMonthDay, disabled, selected }) => css`
    ${notCurrentMonthDay && modifier.notCurrentMonthDay}
    ${disabled && modifier.disabled}
    ${selected && modifier.selected}
  `}
`;
