import { colors } from 'common/styles';
import styled from 'dynamic-styled-components';
import { Button } from 'primitives';

export const WizardContainer = styled.div`
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  height: 6.4rem;
  align-items: center;
  background: ${colors.neutral.gray4};
  border-radius: 1.6rem;
  padding: 1.2rem 1.6rem;
`;

export const Body = styled.main`
  display: flex;
  height: 100%;
  overflow-y: scroll;
  height: min-content;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

export const SquareButton = styled(Button)`
  border-radius: 0.8rem;
`;

export const Content = styled.div`
  overflow-y: scroll;
`;
