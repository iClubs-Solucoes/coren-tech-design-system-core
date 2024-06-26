import { colors, font } from 'common/styles';
import styled from 'dynamic-styled-components';
import { Dropdown } from 'primitives';

export const Field = styled(Dropdown.Field)`
  padding: 1.05rem 2rem;
`;

export const Label = styled.p`
  font: 400 1.2rem Inter;
  color: ${colors.neutral.gray4};
  height: 1.6rem;
`;

export const Value = styled.p`
  font: ${font.presets.bodyAndValue};
  color: ${colors.neutral.gray5};
`;

export const Placeholder = styled.p`
  font-size: ${font.sizes.large};
  color: ${colors.neutral.gray3};
`;
