import { useEffect, useRef, useState } from 'react';

import { Dropdown } from 'primitives';

import * as S from './styles';
import { SelectChildrenProps } from './types';

export function SelectChildren({
  className,
  selectedItem = { value: '', label: '' },
  items = [],
  icon,
  label,
  placeholder,
  search,
  onChange,
  onOpeningDropdownChange,
}: SelectChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [selectWidth, setSelectWidth] = useState<number>();

  useEffect(() => {
    if (ref.current) setSelectWidth(ref.current.clientWidth);
  }, []);

  const listItems = items.map(({ value, label, children }) => (
    <S.Item key={value} hover onClick={() => onChange?.({ value, label })}>
      {children}
    </S.Item>
  ));

  if (search) listItems.unshift(<Dropdown.Search {...search} />);

  return (
    <S.Container data-testid="select-children-container" className={className}>
      <Dropdown.Root onChange={onOpeningDropdownChange}>
        <Dropdown.Trigger>
          <S.Field fieldTheme="field" fieldRef={ref}>
            <>{icon}</>

            <div>
              <S.Label>{label}</S.Label>

              {(selectedItem.label || selectedItem.value) && (
                <S.Value>{selectedItem.label || selectedItem.value}</S.Value>
              )}

              {!selectedItem.label && !selectedItem.value && (
                <S.Placeholder>{placeholder}</S.Placeholder>
              )}
            </div>

            <Dropdown.Arrow />
          </S.Field>
        </Dropdown.Trigger>

        <Dropdown.Menu style={{ width: selectWidth, marginTop: '0.7rem' }}>
          <Dropdown.List>{listItems}</Dropdown.List>
        </Dropdown.Menu>
      </Dropdown.Root>
    </S.Container>
  );
}
