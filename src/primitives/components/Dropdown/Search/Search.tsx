import * as S from './styles';
import { SearchProps } from './types';

export function Search({
  className,
  value = '',
  placeholder = 'Pesquisar',
  onChange,
}: SearchProps) {
  return (
    <S.SearchContainer className={className}>
      <S.Search placeholder={placeholder} value={value} onChange={onChange} />

      <S.MagnifyingGlassIcon />
    </S.SearchContainer>
  );
}
