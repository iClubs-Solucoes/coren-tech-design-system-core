import { useCallback, useMemo, useRef } from 'react';

import { FilterIcon } from 'common/assets/icons';

import * as S from './styles';
import { TabsProps } from './types';

export function Tabs({
  filter = '',
  iconFilter = '',
  filters = [],
  className,
  onChange,
}: TabsProps) {
  const refFilter = useRef<HTMLDivElement>(null);

  const selectedFilter = useMemo(() => {
    return filters.indexOf(filter);
  }, [filter, filters]);

  const handleSelectFilter = useCallback(
    (fItem: string) => {
      onChange?.(fItem);
    },
    [onChange],
  );

  return (
    <S.Container data-testid="tabs" className={className}>
      <S.Filters filters={filters.length}>
        {filters.map((fItem, index) => (
          <S.Filter
            key={fItem}
            ref={refFilter}
            selected={selectedFilter === index}
            onClick={() => {
              handleSelectFilter(fItem);
            }}
          >
            {iconFilter === fItem && <FilterIcon />}
            {fItem}
          </S.Filter>
        ))}
      </S.Filters>
    </S.Container>
  );
}
