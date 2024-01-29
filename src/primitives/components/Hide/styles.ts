import { EyeIcon, EyeShowIcon } from 'common/assets/icons';
import { colors } from 'common/styles';
import styled, { css } from 'styled-components';

export const BaseCSS = css`
  width: 2.4rem;
  height: 2.4rem;

  fill: ${colors.neutral.gray4};
  cursor: pointer;
`;

export const HiddenIcon = styled(EyeIcon)`
  ${BaseCSS}
`;

export const UnhiddenIcon = styled(EyeShowIcon)`
  ${BaseCSS}
`;
