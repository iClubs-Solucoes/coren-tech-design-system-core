import { CheckIcon, CloseIcon } from 'common/assets/icons';
import { colors, font } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';

import { SwitchStyleProps } from './types';

const modifier = {
  littleBall: () => css`
    &:before {
      width: 1.6rem;
      height: 1.6rem;
    }

    input:checked + &:before {
      background-color: ${colors.normal.white};
      margin-left: 3rem;
    }

    input:not(:checked) + &:before {
      background-color: ${colors.neutral.gray3};
      margin-left: 0.45rem;
    }
  `,
  disabled: () => css`
    opacity: 0.4;
  `,
};

export const SwitchContainer = styled.div<SwitchStyleProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  ${({ disabled }) => css`
    ${!!disabled && modifier.disabled()}
  `}
`;

export const Slider = styled.span<SwitchStyleProps>`
  display: flex;
  align-items: center;
  border-radius: 10rem;

  position: absolute;

  cursor: pointer;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  -webkit-transition: 0.2s;
  transition: 0.2s;

  &:before {
    content: '';
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 2.3rem;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + &:before {
    background-color: ${colors.normal.white};
    margin-left: 2.5rem;
  }

  input:not(:checked) + &:before {
    background-color: ${colors.neutral.gray3};
    margin-left: 0.25rem;
  }

  ${({ littleBall }) => css`
    ${!!littleBall && modifier.littleBall()}
  `}
`;

export const Input = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  opacity: 0;
  width: 0;
  height: 0;

  &:not(:checked) + ${Slider} {
    background-color: transparent;
    border: 0.2rem solid ${colors.neutral.gray3};
  }

  &:checked + ${Slider} {
    background-color: ${colors.neutral.gray4};
  }
`;

export const StyledCheckIcon = styled(CheckIcon)`
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  margin-left: 2.925rem;
`;

export const StyledCancelIcon = styled(CloseIcon)`
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  margin-left: 0.65rem;
`;

export const Label = styled.p`
  color: ${colors.neutral.gray5};
  font-size: ${font.sizes.large};
`;

export const Switch = styled.div`
  display: flex;
  position: relative;

  width: 5.2rem;
  height: 3.2rem;
`;
