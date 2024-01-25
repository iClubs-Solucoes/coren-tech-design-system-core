import { useArgs } from '@storybook/preview-api';
import { Meta, StoryFn } from '@storybook/react';

import { SelectItems } from './SelectItems';

export default {
  title: 'Components/SelectItems',
  component: SelectItems,
} as Meta<typeof SelectItems>;

const Template: StoryFn<typeof SelectItems> = function Template(args) {
  const [_, updateArgs] = useArgs();

  const handleChange = (values: string[]) => {
    updateArgs({
      ...args,
      values,
    });
  };
  return <SelectItems {...args} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  values: [],
  label: 'Titulo',
  items: ['Item 1', 'Item 2', 'Item 3'],
  placeholder: 'Selecione um item',
  disabled: false,
};
