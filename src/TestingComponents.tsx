import styled from 'dynamic-styled-components';
import { useToast } from 'hooks/Toast';

import { Button } from './index';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #242424;
  color: white;
`;

export function TestingComponents() {
  const { toast } = useToast();
  return (
    <Container>
      <Button
        buttonTheme="primary"
        onClick={() => {
          toast({
            title: 'TituloA',
            description: 'subtitle',
            themes: 'success',
          });
          toast({
            title: 'TituloA',
            description: 'subtitle',
            themes: 'success',
            location: 'bottom',
          });
        }}
      >
        Clique
      </Button>
    </Container>
  );
}
