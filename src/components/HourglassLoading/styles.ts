import { font } from 'common/styles';
import styled, { keyframes } from 'dynamic-styled-components';

const hourglass = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  display: flex;
  gap: 2.4rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40rem;

  > p {
    font: ${font.presets.enunciation};
    margin-bottom: 1.6rem;
  }
`;

export const Icon = styled.div`
  animation: ${hourglass} 2s linear infinite;
  > svg {
    width: 8rem;
    height: 8rem;
  }
`;
