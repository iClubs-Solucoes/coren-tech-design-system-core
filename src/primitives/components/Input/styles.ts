import { colors } from 'common/styles';
import styled from 'dynamic-styled-components';

export const Container = styled.input`
  outline: none;
  border: none;
  width: 100%;
  padding-left: 2.4rem;

  ::placeholder {
    color: ${colors.neutral.gray3};
    opacity: 1;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
