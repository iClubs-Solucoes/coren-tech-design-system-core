import { useMemo } from 'react';

import { SortIcon } from 'common/assets/icons';
import { Checkbox, Dropdown } from 'primitives';

import * as S from './styles';
import { SelectItemsProps } from './types';

export function SelectItems({
  values = [],
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
      checked: values?.includes(item),
    }));
  }, [values, items]);

  return (
    <S.Container>
      <Dropdown.Root disabled={disabled}>
        <Dropdown.Trigger>
          <S.FieldSelect fieldTheme="field" disabled={disabled}>
            {icon || <SortIcon />}
            <S.Field>
              <S.Label>{label}</S.Label>
              {values.length !== 0 && <S.Value>{values.join(', ')}</S.Value>}
              {values.length === 0 && (
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
                    onChange?.(values.filter(v => v !== item.value));
                    return;
                  }

                  onChange?.([...values, item.value]);
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
