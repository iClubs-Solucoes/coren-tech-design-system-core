import { SearchIcon } from 'common/assets/icons';
import { colors } from 'common/styles';
import styled, { css } from 'dynamic-styled-components';
import { Input } from 'primitives';

const modifier = {
  searchContainer: {
    default: css`
      background-color: ${colors.neutral.white1};
    `,
    hover: css`
      background-color: ${colors.neutral.gray1};
    `,
    filled: css`
      background-color: ${colors.neutral.gray1};
    `,
  },
  input: {
    filled: css`
      color: ${colors.neutral.gray5};
    `,
  },
};

export const Search = styled(Input)`
  font: 300 1.6rem Inter;
  color: ${colors.neutral.gray3};
  background-color: transparent;
  padding-left: 0;

  &:not(:placeholder-shown) {
    ${modifier.input.filled}
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.6rem 0.8rem 1.8rem;
  border-radius: 0.8rem;

  ${modifier.searchContainer.default}

  &:hover {
    ${modifier.searchContainer.hover}
  }

  ${Search}:not(:placeholder-shown) & {
    ${modifier.searchContainer.filled}
  }
`;

export const MagnifyingGlassIcon = styled(SearchIcon)`
  > g > path {
    fill: ${colors.neutral.gray4};
  }
`;
