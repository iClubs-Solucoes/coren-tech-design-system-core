import { colors, font } from 'common/styles';
import styled from 'dynamic-styled-components';

export const Container = styled.div`
  background-color: ${colors.neutral.gray4};
  padding: 2.2rem 0;
  border-radius: 1.6rem 1.6rem 0 0;
  height: 6.4rem;
  color: ${colors.normal.white};
  font: ${font.presets.titlesAndLabels};
`;
