import React, {
  ChangeEvent,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Dropdown } from 'primitives';

import * as S from './styles';
import { AutocompleteProps, ComputedItems } from './types';

export function Autocomplete({
  className,
  label,
  placeholder,
  value,
  menuStyle,
  items = [],
  onChange,
}: AutocompleteProps) {
  const [textFieldWidth, setTextFieldWidth] = useState<number>();

  const fieldRef = useRef<HTMLDivElement>(null);

  const handleCreateSearchableItem = (item: ReactElement) => {
    const onClick = (event: ChangeEvent<HTMLElement>) => {
      item.props.onClick?.();
      onChange?.(event.target.innerText);
    };

    return React.cloneElement(item, { ...item.props, onClick });
  };

  const handleComputeItems = () => {
    const initialValue: ComputedItems = {
      searchable: [],
      notSearchable: [],
    };

    return items.reduce((acc, item) => {
      if (item.searchable === undefined) item.searchable = true;

      if (item.searchable) {
        const searchableItem = handleCreateSearchableItem(item.children);
        acc.searchable.push(searchableItem);
      } else {
        const notSearchableItem = item.children;
        acc.notSearchable.push(notSearchableItem);
      }

      return acc;
    }, initialValue);
  };

  const handleFilterItems = (searchableItems: ReactElement[]) => {
    const lowercaseValue = value?.toLocaleLowerCase?.();

    const filteredItems = searchableItems.filter(item => {
      const lowerCaseItem = item.props.children?.toLocaleLowerCase?.();
      return lowerCaseItem.includes(lowercaseValue);
    });

    if (filteredItems.length === 0)
      filteredItems.push(
        <S.NoSuggestions>Não há sugestões a serem exibidas.</S.NoSuggestions>,
      );

    return filteredItems;
  };

  const menuItems = useMemo(() => {
    const computedItems = handleComputeItems();

    const filteredItems = handleFilterItems(computedItems.searchable);

    return [...computedItems.notSearchable, ...filteredItems];
  }, [items, value]);

  useEffect(() => {
    if (fieldRef.current) setTextFieldWidth(fieldRef.current?.clientWidth);
  }, [textFieldWidth]);

  return (
    <S.AutocompleteContainer className={className}>
      <Dropdown.Root>
        <Dropdown.Trigger>
          <S.FieldContainer ref={fieldRef}>
            <div>
              {label && <Dropdown.Texts.Label>{label}</Dropdown.Texts.Label>}

              <S.Value
                value={value}
                placeholder={placeholder}
                onChange={onChange}
              />
            </div>

            <Dropdown.Arrow />
          </S.FieldContainer>
        </Dropdown.Trigger>

        <S.Menu
          textField={fieldRef.current}
          style={{ width: textFieldWidth, ...menuStyle }}
        >
          <Dropdown.List>{menuItems}</Dropdown.List>
        </S.Menu>
      </Dropdown.Root>
    </S.AutocompleteContainer>
  );
}
