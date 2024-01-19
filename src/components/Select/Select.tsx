import { SuspectIcon } from 'common/assets/icons';
import { Dropdown } from 'primitives';

import * as S from './styles';
import { SelectProps } from './types';

export function Select({
  values = { value: '', label: '' },
  items = [],
  onChange,
}: SelectProps) {
  return (
    <S.Container>
      <Dropdown.Root>
        <Dropdown.Trigger>
          <S.FieldSelect fieldTheme="select">
            <SuspectIcon />
            <p>{values.label || values.value}</p>
            <Dropdown.Arrow />
          </S.FieldSelect>
        </Dropdown.Trigger>
        <Dropdown.Menu style={{ minWidth: '17.4rem' }}>
          {items.map(({ value, label }) => {
            if (value === values.value) return <></>;
            return (
              <S.ItemSelect
                key={value}
                hover
                onClick={() => onChange?.({ value, label })}
              >
                {label || value}
              </S.ItemSelect>
            );
          })}
        </Dropdown.Menu>
      </Dropdown.Root>
    </S.Container>
  );
}
