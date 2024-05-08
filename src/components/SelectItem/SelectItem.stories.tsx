import { Meta, StoryFn } from '@storybook/react';

import { SelectItem } from './SelectItem';

export default {
  title: 'Components/Selects/SelectItem',
  component: SelectItem,
} as Meta<typeof SelectItem>;

const Template: StoryFn<typeof SelectItem> = function Template(args) {
  return <SelectItem {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  value: '',
  label: 'Titulo',
  items: ['Item 1', 'Item 2', 'Item 3'],
  placeholder: 'Selecione um item',
  disabled: false,
};
