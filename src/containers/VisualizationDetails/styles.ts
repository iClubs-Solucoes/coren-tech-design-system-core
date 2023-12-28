import { BoxTailIcon } from 'common/assets/icons';
import { colors, font } from 'common/styles';
import { Button } from 'primitives';
import styled, { css } from 'styled-components';

import { VisualizationDetailsStyleProps } from './types';

const modifier = {
  progressBar: (progress: number) => css`
    width: ${progress}%;
  `,
};

export const Header = styled.div`
  margin-bottom: 6.4rem;
`;

export const Content = styled.div``;

export const Title = styled.h2`
  font: ${font.presets.primaryTitles};
  color: ${colors.neutral.gray5};
  margin-bottom: 3.2rem;
`;

export const BarProgress = styled.div<VisualizationDetailsStyleProps>`
  display: flex;
  width: 100%;
  border-radius: 0.8rem;
  height: 0.8rem;
  background-color: ${colors.neutral.gray1};
  transition: width 0.5s;

  &::before {
    content: ' ';
    display: inline-block;

    border-radius: 0.8rem;
    height: 0.8rem;
    background-color: ${colors.neutral.gray5};
    transition: width 0.5s;
    width: 0rem;
    ${({ progress }) => css`
      ${!!progress && modifier.progressBar(progress)}
    `}
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  gap: 1.6rem;
  margin-top: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: relative;
`;

export const AlertPopOver = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 2.4rem;
  gap: 1.6rem;
  background-color: ${colors.neutral.black2};
  border-radius: 1.6rem;
  color: ${colors.normal.white};
  width: 34rem;
  height: 14.8rem;
  bottom: 7.5rem;
  right: 0;
`;

export const Head = styled.div`
  display: flex;
  font: ${font.presets.temporaryEmphasis};
  > svg {
    margin-right: 1.6rem;
  }
`;

export const ButtonTourOk = styled(Button)`
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
  height: 2.4rem;
  background-color: ${colors.neutral.gray2};
  transition: all 0.4s ease-out;

  &:hover {
    background-color: ${colors.neutral.white1};
  }
`;

export const ButtonText = styled.span`
  font-family: ${font.family.Inter};
  font-size: 1.6rem;
  font-weight: ${font.medium};
  color: ${colors.neutral.gray5};
`;

export const Arrow = styled(BoxTailIcon)`
  position: absolute;
  left: 27rem;
  top: 14rem;
`;

export const ButtonFooter = styled(Button)`
  border-radius: 0.8rem;
`;

export const ButtonShowPopOver = styled.div<VisualizationDetailsStyleProps>`
  display: flex;
  height: 4.3rem;
  padding: 1.2rem 1.6rem;
  align-items: center;
  border-radius: 0.8rem;
  background: ${({ disabled }) =>
    disabled ? colors.neutral.gray1 : colors.neutral.gray4};
  transition: all 0.4s ease-out;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ disabled }) => css`
    ${!disabled &&
    css`
      &:hover {
        background: ${colors.neutral.gray5};
      }
    `}
  `}
`;

export const ButtonShowPopOverText = styled(
  ButtonText,
)<VisualizationDetailsStyleProps>`
  color: ${({ disabled }) =>
    disabled ? colors.neutral.gray3 : colors.normal.white};
`;
