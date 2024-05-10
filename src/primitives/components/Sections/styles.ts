import { colors } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';
import { Divisor } from 'primitives';

import { SectionsContainerStyleProps } from './types';

const divisorClass = 'divisor';

const allChildrensNotHaveDivisorClass = `> *:not([class*='${divisorClass}'])`;
const sections = allChildrensNotHaveDivisorClass;

export const SectionsContainer = styled.div<SectionsContainerStyleProps>`
  ${({ sectionsPadding }) => css`
    height: 100%;
    overflow-y: scroll;

    ${sections} {
      padding: ${sectionsPadding};
    }
  `}
`;

export const Hr = styled(Divisor).attrs({ className: divisorClass })`
  border-color: ${colors.neutral.gray1};
`;
