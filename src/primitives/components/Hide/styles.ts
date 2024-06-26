import { VisibilityCrossedIcon, VisibilityIcon } from 'common/assets/icons';
import { colors } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';

export const BaseCSS = css`
  width: 2.4rem;
  height: 2.4rem;

  fill: ${colors.neutral.gray4};
  flex-shrink: 0;
  cursor: pointer;
`;

export const HiddenIcon = styled(VisibilityCrossedIcon)`
  ${BaseCSS}
`;

export const UnhiddenIcon = styled(VisibilityIcon)`
  ${BaseCSS}
`;
