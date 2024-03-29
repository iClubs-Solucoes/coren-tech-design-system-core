import { Dropdown } from 'primitives';

import * as S from './styles';
import { SelectProps } from './types';

export function Select({
  className,
  values = { value: '', label: '' },
  items = [],
  icon,
  onChange,
}: SelectProps) {
  return (
    <S.Container className={className}>
      <Dropdown.Root>
        <Dropdown.Trigger>
          <S.FieldSelect fieldTheme="select">
            <>{icon}</>
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
