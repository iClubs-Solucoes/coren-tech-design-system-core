import { Dropdown } from 'primitives';

import * as S from './styles';
import { SelectProps } from './types';

export function Select({
  className,
  selectTheme = 'primary',
  values = { value: '', label: '' },
  items = [],
  icon,
  menuStyle,
  filled,
  onChange,
  onOpeningDropdownChange,
}: SelectProps) {
  const handleFieldTheme = () => {
    switch (selectTheme) {
      case 'primary':
        return 'select';
      case 'secondary':
        return 'third';
    }
  };

  const fieldTheme = handleFieldTheme();

  return (
    <S.Container data-testid="select-container" className={className}>
      <Dropdown.Root onChange={onOpeningDropdownChange}>
        <Dropdown.Trigger>
          <S.FieldSelect fieldTheme={fieldTheme} filled={filled}>
            <>{icon}</>
            <p>{values.label || values.value}</p>
            <Dropdown.Arrow />
          </S.FieldSelect>
        </Dropdown.Trigger>

        <Dropdown.Menu style={{ minWidth: '17.4rem', ...menuStyle }}>
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
