import { colors } from 'common/styles';
import styled from 'dynamic-styled-components';
import { Button } from 'primitives';

export const WizardContainer = styled.div``;

export const Header = styled.div`
  display: flex;
  height: 6.4rem;
  align-items: center;
  background: ${colors.neutral.gray4};
  border-radius: 1.6rem;
  padding: 1.2rem 1.6rem;
`;

export const Body = styled.div`
  display: flex;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SquareButton = styled(Button)`
  border-radius: 0.8rem;
`;
