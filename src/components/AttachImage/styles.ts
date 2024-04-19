import { DeleteIcon, ImageIcon } from 'common/assets/icons';
import { colors, font } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';

import {
  FilledContainerStyleProps,
  ImgIconStyleProps,
  NotFilledContainerStyleProps,
  NotFilledImageContainerStyleProps,
  NotFilledTitleStyleProps,
  PlaceholderStyleProps,
} from './types';

const modifier = {
  notFilled: {
    default: {
      container: css`
        outline: 0.1rem solid ${colors.neutral.gray2};
        background-color: transparent;
      `,
    },
    hover: {
      container: css`
        background-color: ${colors.neutral.gray1};
        outline: none;
      `,
      imageContainer: css`
        background-color: ${colors.neutral.gray6};
      `,
    },
    disabled: {
      container: css`
        outline: 0.1rem solid ${colors.neutral.gray6};
        background-color: ${colors.neutral.gray1};
        cursor: not-allowed;
      `,
      imageContainer: css`
        background-color: ${colors.neutral.gray1};
      `,
      title: css`
        font: 400 1.2rem Inter;
        color: ${colors.neutral.gray2};
      `,
      placeholder: css`
        color: ${colors.neutral.gray2};
      `,
      imgIcon: css`
        > g > g > path {
          fill: ${colors.neutral.gray2};
        }
      `,
    },
  },
  filled: {
    default: {
      container: css`
        outline: 0.1rem solid ${colors.neutral.gray6};
        background-color: ${colors.neutral.gray1};
        cursor: auto;
      `,
      imageContainer: css`
        overflow: hidden;
        outline: 0.1rem solid ${colors.neutral.gray2};
      `,
    },
    hover: {
      container: css`
        outline: 0.1rem solid ${colors.neutral.gray2};
      `,
    },
  },
};

export const AttachImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  gap: 1.6rem;
  padding: 1.6rem;
  border-radius: 0.8rem;
  align-items: center;
`;

export const FilledContainer = styled(Container)<FilledContainerStyleProps>`
  ${modifier.filled.default.container};

  ${({ disabled }) => css`
    &:hover {
      ${!disabled && modifier.filled.hover.container};
    }
  `}
`;

export const NotFilledContainer = styled(
  Container,
)<NotFilledContainerStyleProps>`
  ${modifier.notFilled.default.container};

  ${({ disabled }) => css`
    &:hover {
      ${!disabled && modifier.notFilled.hover.container}
    }

    ${disabled && modifier.notFilled.disabled.container};
  `}
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 7.2rem;
  height: 7.2rem;
  border-radius: 0.8rem;
  background-color: ${colors.neutral.gray1};
  align-items: center;
  justify-content: center;
`;

export const FilledImageContainer = styled(ImageContainer)`
  ${modifier.filled.default.imageContainer};
`;

export const NotFilledImageContainer = styled(
  ImageContainer,
)<NotFilledImageContainerStyleProps>`
  ${({ disabled }) => css`
    ${NotFilledContainer}:hover & {
      ${!disabled && modifier.notFilled.hover.imageContainer};
    }

    ${disabled && modifier.notFilled.disabled.imageContainer};
  `}
`;

export const Image = styled.img`
  height: 100%;
`;

export const ImgIcon = styled(ImageIcon)<ImgIconStyleProps>`
  width: 3.2rem;
  height: 3.2rem;

  ${({ disabled }) => css`
    ${disabled && modifier.notFilled.disabled.imgIcon};
  `}
`;

export const Description = styled.div``;

export const Title = styled.p`
  color: ${colors.neutral.gray4};
`;

export const FilledTitle = styled(Title)`
  font: 400 1.2rem Inter;
`;

export const NotFilledTitle = styled(Title)<NotFilledTitleStyleProps>`
  font: 500 1.2rem Inter;

  ${({ disabled }) => css`
    ${disabled && modifier.notFilled.disabled.title};
  `}
`;

export const Placeholder = styled.p<PlaceholderStyleProps>`
  font: ${font.presets.bodyAndValue};
  color: ${colors.neutral.gray3};

  ${({ disabled }) => css`
    ${disabled && modifier.notFilled.disabled.placeholder};
  `}
`;

export const ChooseFile = styled.em`
  font: 600 1.6rem Inter;
  font-style: normal;
  text-decoration: underline;
`;

export const ImageName = styled.p`
  font: ${font.presets.bodyAndValue};
  color: ${colors.neutral.gray5};
`;

export const DetachButton = styled(DeleteIcon)`
  margin-left: -6rem;
  cursor: pointer;
`;
