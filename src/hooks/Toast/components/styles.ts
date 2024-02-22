import { colors, font, ZIndex } from 'common/styles';
import { shadow } from 'common/styles/theme';
import styled, { css, keyframes } from 'dynamic-styled-components';

import { ToastListStyleProps, ToastStyleProps } from './types';

const modifier = {
  themes: {
    success: css`
      background-color: ${colors.soft.green2};
      color: ${colors.neutral.gray7};
      > svg {
        path {
          fill: ${colors.soft.green4};
        }
      }
    `,
    error: css`
      background-color: ${colors.soft.orange5};
      color: ${colors.normal.white};
      > svg {
        path {
          fill: ${colors.soft.orange2};
        }
      }
    `,
  },
  location: {
    top: css`
      top: 8rem;
    `,
    bottom: css`
      bottom: 12rem;
    `,
  },
  animation: {
    show: keyframes`
      from {
        right: -51.5rem;
        opacity: -1;
      }
      to {
        right: 9.6rem;
        opacity: 1;
      }`,
    close: keyframes`
      from {
        right: 9.6rem;
        opacity: 1;
      }
      to {
        right: -51.5rem;
        opacity: 0;
      }`,
  },
};

export const Container = styled.div<ToastStyleProps>`
  position: relative;
  max-width: 51.5rem;
  min-width: 40rem;
  z-index: ${ZIndex.modal};
  right: -51.5rem;
  ${({ show }) => css`
    animation: ${modifier.animation[show ? 'show' : 'close']} 0.8s linear;
    ${!!show && 'right: 9.6rem;'}
  `}
`;

export const Wrapper = styled.div<ToastStyleProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0.8rem;
  padding: 2.25rem 3.2rem;
  box-shadow: ${shadow.toast};
  ${({ themes }) => css`
    ${!!themes && modifier.themes[themes]}
  `};
`;

export const Icon = styled.div<ToastStyleProps>`
  display: flex;
  align-items: start;
  max-width: 4rem;
  max-height: 4rem;
  margin-right: 1.6rem;
  svg {
    height: 4rem;
    width: 4rem;
  }
  ${({ themes }) => css`
    ${!!themes && modifier.themes[themes]}
  `};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-weight: ${font.regular};
  > span + span {
    margin-top: 0.8rem;
  }
`;

export const Title = styled.span`
  display: inline-block;
  font-family: ${font.family.Inter};
  font-size: ${font.sizes.heading05};
`;

export const Body = styled.span`
  display: inline-block;
  font-family: ${font.family.Inter};
  font-size: ${font.sizes.large};
`;

export const ListToasts = styled.div<ToastListStyleProps>`
  display: flex;
  position: fixed;
  flex-direction: column;
  gap: 0.8rem;
  right: 0;
  ${({ location = 'top' }) => css`
    ${!!location && modifier.location[location]}
  `}
`;
