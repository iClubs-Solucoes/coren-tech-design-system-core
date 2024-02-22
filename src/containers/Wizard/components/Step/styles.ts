import { KeyboardArrowRightIcon } from 'common/assets/icons';
import { colors, font } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';

import {
  NameStyleProps,
  NumberStyleProps,
  StepContainerStyleProps,
} from './types';

export const StepContainer = styled.div<StepContainerStyleProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;

  ${({ currentStep, disabled }) => css`
    ${!currentStep &&
    css`
      &:not(:hover) {
        max-width: 6.4rem;
        max-height: 4rem;
      }

      &:hover {
        max-width: unset;
        max-height: unset;
      }
    `}

    ${disabled &&
    css`
      cursor: not-allowed;
    `}
  `}
`;

export const IconCSS = css`
  margin-right: 0.8rem;
`;

const modifiers = {
  name: {
    currentStep: css`
      color: ${colors.normal.white};
      margin-right: 1.6rem;

      &:hover {
        text-decoration: underline;
      }
    `,
    nextStep: css`
      width: 0%;
      overflow: hidden;
      white-space: nowrap;
      color: ${colors.neutral.gray3};

      -webkit-transition: width 1s ease;
      -moz-transition: width 1s ease;
      -o-transition: width 1s ease;
      transition: width 1s ease;

      ${StepContainer}:hover > & {
        width: 100%;
        margin-right: 1.6rem;
      }
    `,
  },
  number: {
    currentStep: css`
      color: ${colors.normal.white};
    `,
    nextStep: css`
      color: ${colors.neutral.gray3};
      font: 800 1.6rem Inter;

      ${StepContainer}:hover & {
        ${IconCSS}
      }

      ${StepContainer}:not(:hover) & {
        margin-right: 0;
      }

      transition: margin-right 1s ease;
    `,
  },
};

export const Name = styled.span<NameStyleProps>`
  font: ${font.presets.bodyAndValue};

  ${({ currentStep }) => css`
    ${currentStep && modifiers.name.currentStep}
    ${!currentStep && modifiers.name.nextStep}
  `}
`;

export const PreIcon = styled.span``;

export const PreIconContainer = styled.div`
  ${IconCSS}
`;

export const Number = styled.span<NumberStyleProps>`
  ${IconCSS}
  font: 600 1.6rem Inter;
  padding: 0.8rem 1.6rem;

  ${({ currentStep }) => css`
    ${currentStep && modifiers.number.currentStep}
    ${!currentStep && modifiers.number.nextStep}
  `}
`;

export const NextArrow = styled(KeyboardArrowRightIcon)`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;

  > g > path {
    fill: ${colors.neutral.gray3};
  }
`;
