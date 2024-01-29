import { colors, font } from 'common/styles';
import styled, { css } from 'styled-components';

import { TextareaStyleProps } from './types';
const modifier = {
  disabled: () => css`
    color: ${colors.neutral.gray3};
    label {
      color: ${colors.neutral.gray3};
    }
    * {
      color: ${colors.neutral.gray3};
    }
  `,
};

export const Container = styled.div<TextareaStyleProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 0.8rem;
  padding: 1rem 1.6rem 1rem 1.6rem;
  border-radius: 0.8rem;
  border: 0.1rem solid transparent;
  background-color: ${colors.neutral.gray1};

  &:hover {
    border: 0.1rem solid ${colors.neutral.gray2};
  }

  ${({ disabled }) => css`
    ${!!disabled && modifier.disabled()};
  `}
`;

export const Textarea = styled.textarea`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  background-color: ${colors.neutral.gray1};

  ::placeholder {
    color: ${colors.neutral.gray3};
  }

  &:focus {
    outline: none;
  }

  :not(:placeholder-shown) {
    color: ${colors.neutral.gray5};
  }
`;

export const Label = styled.label`
  font-size: ${font.sizes.small};
  font-weight: ${font.regular};
  color: ${colors.neutral.gray4};
`;
