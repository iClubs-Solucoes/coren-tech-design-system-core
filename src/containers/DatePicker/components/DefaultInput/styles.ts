import { colors, font } from 'common/styles';
import styled from 'dynamic-styled-components';

export const Label = styled.p`
  font-size: ${font.sizes.small};
  color: ${colors.neutral.gray4};
  height: 1.6rem;
`;

export const Value = styled.p`
  font-size: ${font.sizes.large};
  color: ${colors.neutral.gray5};
`;

export const Placeholder = styled.p`
  font-size: ${font.sizes.large};
  color: ${colors.neutral.gray3};
`;
