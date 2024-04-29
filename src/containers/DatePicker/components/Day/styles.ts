import { colors } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';

import { DayContainerStyleProps } from './types';

const modifier = {
  notCurrentMonthDay: css`
    color: ${colors.neutral.gray2} !important;
    background-color: ${colors.normal.white} !important;
  `,
};

export const DayContainer = styled.p<DayContainerStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 0.4rem;

  ${({ notCurrentMonthDay }) => css`
    ${notCurrentMonthDay && modifier.notCurrentMonthDay}
  `}
`;
