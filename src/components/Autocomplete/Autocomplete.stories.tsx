import { useArgs } from '@storybook/preview-api';
import { Meta, StoryFn } from '@storybook/react';
import { ErrorIcon, SuccessufulIcon } from 'common/assets/icons';
import { colors } from 'common/styles';
import { Dropdown } from 'primitives';
import styled from 'styled-components';

import { Autocomplete } from './Autocomplete';
import { AutocompleteProps, Item } from './types';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
} as Meta<typeof Autocomplete>;

const S = {
  NotSearchableItem: styled(Dropdown.Item)`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,
  Suggestions: styled.p`
    font: 400 1.4rem Inter;
    color: ${colors.neutral.gray3};
    padding: 0.65rem 0.8rem;
  `,
};

const Template: StoryFn<typeof Autocomplete> = function Template(args) {
  const [props, updateArgs] = useArgs<AutocompleteProps>();

  const { value = '' } = props;

  const handleFieldChange = (value: string) => updateArgs({ ...props, value });

  return (
    <Autocomplete
      {...args}
      {...props}
      value={value}
      onChange={handleFieldChange}
    />
  );
};

const items: Item[] = [
  {
    searchable: false,
    children: (
      <S.NotSearchableItem
        key="Item não pesquisável 1"
        onClick={() => console.log('Ação para "Item não pesquisável 1"')}
      >
        <>
          <SuccessufulIcon />
          Item não pesquisável 1
        </>
      </S.NotSearchableItem>
    ),
  },
  {
    searchable: false,
    children: (
      <S.NotSearchableItem
        key="Item não pesquisável 2"
        onClick={() => console.log('Ação para "Item não pesquisável 2"')}
      >
        <>
          <ErrorIcon />
          Item não pesquisável 2
        </>
      </S.NotSearchableItem>
    ),
  },
  {
    searchable: false,
    children: (
      <S.Suggestions key="Ou utilizar sugestões:">
        Ou utilizar sugestões:
      </S.Suggestions>
    ),
  },
  {
    children: <Dropdown.Item key="Sugestão 1">Sugestão 1</Dropdown.Item>,
  },
  {
    children: <Dropdown.Item key="Sugestão 2">Sugestão 2</Dropdown.Item>,
  },
  {
    children: <Dropdown.Item key="Sugestão 3">Sugestão 3</Dropdown.Item>,
  },
  {
    children: <Dropdown.Item key="Sugestão 4">Sugestão 4</Dropdown.Item>,
  },
];

export const Default = Template.bind({});
Default.args = {
  label: 'Valor',
  placeholder: 'Selecione ou digite',
  items,
};
