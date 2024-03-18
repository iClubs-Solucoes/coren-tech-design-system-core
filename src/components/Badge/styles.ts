import { colors, font } from 'common/styles';
import styled from 'styled-components';

export const BadgeContainer = styled.div`
  font: ${font.presets.bodyAndValue};
  color: ${colors.normal.black};
  padding: 0.65rem 0.8rem;
  background-color: ${colors.neutral.gray1};
  border-radius: 0.8rem;
`;
