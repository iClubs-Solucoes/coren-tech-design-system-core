import * as S from './styles';
import { SearchProps } from './types';

export function Search({ ...inputProps }: SearchProps) {
  return (
    <S.Container>
      <S.SearchInputContainer>
        <S.SearchInput placeholder="Pesquisar" {...inputProps} />
        <S.StyledSearchIcon />
      </S.SearchInputContainer>
    </S.Container>
  );
}
