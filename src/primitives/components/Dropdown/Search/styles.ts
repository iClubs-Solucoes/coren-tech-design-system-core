import { colors, font } from 'common/styles';
import { Input } from 'primitives';
import styled from 'styled-components';

export const Container = styled.div``;

export const SearchInputContainer = styled.div`
  display: flex;
  z-index: 6;
  width: 38rem;
  height: 4rem;
  background-color: ${colors.neutral.white1};
  align-items: center;
  padding: 1rem 1.6rem;
  border-radius: 0.8rem;
`;

export const SearchInput = styled(Input)`
  width: 30rem;
  background-color: ${colors.neutral.white1};
  padding: 0;

  font: ${font.presets.enunciation};
  color: ${colors.neutral.gray5};

  ::placeholder {
    font: ${font.presets.enunciation};
    color: ${colors.neutral.gray5};
  }
`;

export const StyledSearchIcon = styled.div`
  cursor: pointer;
  margin-left: auto;

  > g > path {
    fill: ${colors.neutral.gray4};
  }
`;
