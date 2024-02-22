import { colors, font } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';
import { Input } from 'primitives';

import { SearchStyleProps } from './types';

const modifier = {
  contracted: () => css`
    cursor: pointer;
    width: 5.6rem;
  `,

  disabled: () => css`
    opacity: 0.4;
  `,
};

export const Container = styled.div<SearchStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  background-color: ${colors.neutral.gray1};
  border-radius: 0.8rem;
  height: 4.8rem;
  width: 100%;
  padding: 1.2rem 1.6rem;
  transition: width 0.3s ease-in;
  max-width: 20rem;

  > svg {
    cursor: pointer;
    path {
      fill: ${colors.neutral.gray4};
    }
  }

  ${({ contracted, disabled }) => css`
    ${!!contracted && modifier.contracted()}
    ${!!disabled && modifier.disabled()}
  `}
`;

export const InputSearch = styled(Input)`
  background-color: ${colors.neutral.gray1};
  color: ${colors.neutral.gray5};
  font: ${font.presets.enunciation};
  width: 100%;
  padding-left: 0;

  ::placeholder {
    font: ${font.presets.enunciation};
    color: ${colors.neutral.gray5};
  }
`;
