import { CheckIcon, CloseIcon } from 'common/assets/icons';
import { colors, font } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';

import { NotSatisfiedStyleProps, TextStyleProps } from './types';

const modifier = {
  notSatisfied: {
    error: css`
      > path {
        fill: ${colors.soft.orange6};
      }
    `,
  },
  text: {
    error: css`
      color: ${colors.soft.orange6};
    `,
  },
};

export const CriteriaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Satisfied = styled(CheckIcon)`
  width: 1.6rem;
  height: 1.6rem;

  > path {
    fill: ${colors.soft.green5};
  }
`;

export const NotSatisfied = styled(CloseIcon)<NotSatisfiedStyleProps>`
  width: 1.6rem;
  height: 1.6rem;

  > path {
    fill: ${colors.neutral.gray9};
  }

  ${({ error }) => css`
    ${error && modifier.notSatisfied.error}
  `}
`;

export const Text = styled.p<TextStyleProps>`
  font: ${font.presets.titlesAndLabels};
  color: ${colors.neutral.gray5};

  ${({ error }) => css`
    ${error && modifier.text.error}
  `}
`;
