import { useEffect, useRef, useState } from 'react';

import { SortIcon } from 'common/assets/icons';
import { Dropdown } from 'primitives';

import * as S from './styles';
import { SelectItemProps } from './types';

export function SelectItem({
  className,
  value,
  icon,
  label,
  placeholder,
  items = [],
  disabled,
  menuStyle,
  onChange,
}: SelectItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [selectWidth, setSelectWidth] = useState<number>();

  useEffect(() => {
    if (ref.current) setSelectWidth(ref.current.clientWidth);
  }, []);

  return (
    <S.Container className={className}>
      <Dropdown.Root disabled={disabled}>
        <Dropdown.Trigger>
          <S.FieldSelect fieldTheme="field" disabled={disabled} fieldRef={ref}>
            {icon || <SortIcon />}
            <div>
              <S.Label>{label}</S.Label>
              {!!value && <S.Value>{value}</S.Value>}
              {!value && <S.Placeholder>{placeholder}</S.Placeholder>}
            </div>
            <Dropdown.Arrow disabled={disabled} />
          </S.FieldSelect>
        </Dropdown.Trigger>

        <Dropdown.Menu
          style={{ minWidth: '17.4rem', width: selectWidth, ...menuStyle }}
        >
          <Dropdown.List>
            {items.map(item => (
              <S.ItemSelect key={item} onClick={() => onChange?.(item)}>
                {item}
              </S.ItemSelect>
            ))}
          </Dropdown.List>
        </Dropdown.Menu>
      </Dropdown.Root>
    </S.Container>
  );
}
