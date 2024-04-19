import { disappearanceCSS } from 'common/styles';
import styled from 'dynamic-styled-components';

export const AttachContainer = styled.div``;

export const Label = styled.label`
  cursor: pointer;
`;

export const Input = styled.input.attrs(() => {
  return {
    type: 'file',
  };
})`
  ${disappearanceCSS}
`;
