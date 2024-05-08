import { disappearanceCSS } from 'common/styles';
import styled from 'dynamic-styled-components';

export const AttachContainer = styled.div`
  width: 100%;
`;

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
