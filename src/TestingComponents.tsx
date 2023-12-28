import styled from 'styled-components';

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
  return <Container>{/**Test */}</Container>;
}
