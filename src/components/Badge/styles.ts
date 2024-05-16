import { colors, font } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';

import { BadgeContainerProps } from './types';

export const modifier = {
  badge: {
    primary: css`
      font: ${font.presets.bodyAndValue};
      color: ${colors.normal.black};
      padding: 0.65rem 0.8rem;
      background-color: ${colors.neutral.gray1};
    `,
    secondary: css`
      font: ${font.presets.titlesAndLabels};
      color: ${colors.neutral.gray4};
      padding: 0.4rem 1rem;
      background-color: ${colors.neutral.white1};
      border: 0.1rem solid ${colors.neutral.gray1};

      *[fill] {
        color: ${colors.neutral.gray4};
      }
    `,
    third: css`
      font: ${font.presets.bodyAndValue};
      color: ${colors.neutral.gray4};
      padding: 0.65rem 1rem;
      background-color: ${colors.normal.white};

      border: 0.15rem solid ${colors.neutral.gray2};

      *[fill] {
        color: ${colors.neutral.gray4};
      }
    `,
    fourth: css`
      font: ${font.presets.bodyAndValue};
      color: ${colors.neutral.gray5};

      padding: 0.25rem 0.8rem;
      background-color: ${colors.neutral.white3};

      *[fill] {
        color: ${colors.neutral.gray5};
      }
    `,
  },
};

export const BadgeContainer = styled.div<BadgeContainerProps>`
  border-radius: 0.8rem;

  ${({ badgeTheme }) => modifier.badge[badgeTheme]};
`;
