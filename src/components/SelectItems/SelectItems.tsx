import { useMemo } from 'react';

import { SortIcon } from 'common/assets/icons';
import { Dropdown } from 'primitives';
import { Checkbox } from 'primitives/components/Checkbox';

import * as S from './styles';
import { SelectItemsProps } from './types';

export function SelectItems({
  value = [],
  icon,
  label,
  placeholder,
  items = [],
  disabled,
  onChange,
}: SelectItemsProps) {
  const itemsChecked = useMemo(() => {
    return items.map(item => ({
      value: item,
      checked: value?.includes(item),
    }));
  }, [value, items]);

  return (
    <S.Container>
      <Dropdown.Root disabled={disabled}>
        <Dropdown.Trigger>
          <S.FieldSelect fieldTheme="field" disabled={disabled}>
            {icon || <SortIcon />}
            <S.Field>
              <S.Label>{label}</S.Label>
              {!!value && <S.Value>{value.join(', ')}</S.Value>}
              {value.length === 0 && (
                <S.Placeholder>{placeholder}</S.Placeholder>
              )}
            </S.Field>
            <Dropdown.Arrow disabled={disabled} />
          </S.FieldSelect>
        </Dropdown.Trigger>
        <Dropdown.Menu style={{ minWidth: '17.4rem' }}>
          <Dropdown.List>
            {itemsChecked.map(item => (
              <S.ItemSelect
                key={`${item.value + item.checked}`}
                hover={false}
                noopClose
                onClick={() => {
                  if (item.checked) {
                    onChange?.(value.filter(v => v !== item.value));
                    return;
                  }

                  onChange?.([...value, item.value]);
                }}
              >
                <Checkbox label={item.value} checked={item.checked} />
              </S.ItemSelect>
            ))}
          </Dropdown.List>
          <Dropdown.List>
            <S.ButtonSelectItems>Escolher</S.ButtonSelectItems>
          </Dropdown.List>
        </Dropdown.Menu>
      </Dropdown.Root>
    </S.Container>
  );
}
