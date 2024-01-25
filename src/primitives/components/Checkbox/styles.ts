import { colors } from 'common/styles';
import styled, { css } from 'styled-components';

import { CheckboxStyleProps } from './types';

const modifier = {
  checked: () => css`
    background-color: ${colors.neutral.gray1};
  `,
};

export const Container = styled.div<CheckboxStyleProps>`
  display: flex;
  align-items: center;
  border-radius: 0.8rem;
  padding: 0.4rem 0.8rem 0.4rem 1.6rem;
  gap: 1rem;
  width: max-content;
  height: 3.2rem;
  transition: background-color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    background-color: ${colors.neutral.gray1};
  }

  ${({ checked }) => css`
    ${!!checked && modifier.checked()}
  `}
`;

export const Input = styled.input`
  color: ${colors.neutral.gray4};
  border: 0.1rem solid ${colors.neutral.gray2};
  border-radius: 0.4rem;
  height: 2.4rem;
  width: 2.4rem;

  &:after {
  }

  &:active {
    accent-color: ${colors.neutral.gray4};
  }

  &:checked {
    accent-color: ${colors.neutral.gray4};
    color: white;
  }

  &:checked ~ :after {
    accent-color: ${colors.neutral.gray4};
    color: white;
  }
`;

export const Label = styled.label`
  text-align: center;
  cursor: pointer;
`;
