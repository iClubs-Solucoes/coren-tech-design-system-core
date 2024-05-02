import { colors, font } from 'common/styles';
import styled from 'dynamic-styled-components';
import { Input } from 'primitives';

export const TimeInputContainer = styled(Input)`
  width: 8rem !important;
  height: 3.2rem;
  background-color: ${colors.neutral.gray1};
  border-radius: 0.8rem;
  font: ${font.presets.bodyAndValue};
  color: ${colors.neutral.gray4};
  text-align: center;
`;
